import { shallow } from 'enzyme';
import React from 'react';
import { Button, View } from 'react-native';

import HomeScreen from '../HomeScreen';

describe('<HomeScreen />', () => {
  it('should render a <View />', () => {
    const wrapper = shallow(
      <HomeScreen
        navigation={{ navigate: () => {} }}
      />,
    );
    expect(wrapper.find(View).length).toEqual(1);
  });

  it('should navigate when you press a button', () => {
    const navigate = jest.fn();
    const wrapper = shallow(
      <HomeScreen
        navigation={{ navigate }}
      />,
    );
    wrapper.find(Button).first().simulate('press');
    expect(navigate.mock.calls.length).toEqual(1);
  });
});
