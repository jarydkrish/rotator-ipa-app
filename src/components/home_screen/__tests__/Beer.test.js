import { shallow } from 'enzyme';
import React from 'react';
import { ListItem } from 'react-native-elements';
import { QueryRenderer } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import graphql from 'babel-plugin-relay/macro';

import BeerContainer, { Beer } from '../Beer';

describe('<Beer />', () => {
  it('should render a <Beer />', () => {
    const environment = createMockEnvironment();
    const wrapper = shallow(
      <QueryRenderer
        environment={environment}
        query={graphql`
          query BeerTestQuery @relay_test_operation {
            beer: node(id: "test-id") {
              ...Beer_beer
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (props) {
            return <BeerContainer beer={props.beer} navigation={{ navigate: () => {} }} />;
          }
          if (error) {
            return error.message;
          }
          return 'Loading...';
        }}
      />,
    );
    environment.mock.resolveMostRecentOperation(
      (operation) => MockPayloadGenerator.generate(operation),
    );
    const beer = wrapper.find(BeerContainer);
    expect(beer.length).toEqual(1);
  });

  it('should handle press events', () => {
    const navigate = jest.fn();
    const wrapper = shallow(
      <Beer
        beer={{ id: 'abc123', name: 'Some beer', kind: 'some kind' }}
        navigation={{ navigate }}
      />,
    );
    wrapper.find(ListItem).first().simulate('press');
    expect(navigate.mock.calls.length).toEqual(1);
  });
});
