import { shallow } from 'enzyme';
import React from 'react';
import { View } from 'react-native';

import BeerScreen from '../BeerScreen';

describe('<BeerScreen />', () => {
  it('should render a <View />', () => {
    const wrapper = shallow(<BeerScreen route={{ params: { id: 'abc123' } }} />);
    expect(wrapper.find(View).length).toEqual(1);
  });
});
