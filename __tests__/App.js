import { shallow } from 'enzyme';
import React from 'react';
import { View } from 'react-native';

import App from '../App';

describe('<App />', () => {
  it('should render a <View />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(View).length).toEqual(1);
  });
});
