import { shallow } from 'enzyme';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import App from '../App';

describe('<App />', () => {
  it('should render a <NavigationContainer />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(NavigationContainer).length).toEqual(1);
  });
});
