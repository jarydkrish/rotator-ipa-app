import { shallow } from 'enzyme';
import React from 'react';

import Beers from '../Beers';
import BeerContainer from '../Beer';

describe('<Beers />', () => {
  it('should render at least one <Beer />', () => {
    const wrapper = shallow(
      <Beers
        props={{ beers: { nodes: [{ id: 'abc123' }] } }}
        navigation={{ navigate: () => {} }}
      />,
    );
    expect(wrapper.find(BeerContainer).length).toEqual(1);
  });
});
