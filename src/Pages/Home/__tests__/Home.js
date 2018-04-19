import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

it('renders welcome message', () => {
  const wrapper = shallow(<Home />);
  const welcome = <h2>Welcome to React</h2>;
  expect(wrapper).toContainReact(welcome);
});
