import React from 'react';
import { shallow } from 'enzyme';
import Library from './Library';

it('renders without crashing', () => {
  shallow(<Library />);
});
