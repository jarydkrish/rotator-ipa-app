import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { shallow } from 'enzyme';
import React from 'react';
import { QueryRenderer } from 'react-relay';

import HomeScreen from '../HomeScreen';

let mock = null;

describe('<HomeScreen />', () => {
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet('/graphql').reply(200, {
      data: {
        beers: {
          nodes: [
            {
              id: 'gid://rotator-ipa/Beer/3',
              name: 'Oktoberfest Sudo Lager',
              kind: 'Oktoberfest',
            },
          ],
        },
      },
    });
  });

  afterEach(() => {
    mock.restore();
  });

  it('should render a <QueryRenderer />', () => {
    const wrapper = shallow(
      <HomeScreen
        navigation={{ navigate: () => {} }}
      />,
    );
    expect(wrapper.find(QueryRenderer).length).toEqual(1);
  });
});
