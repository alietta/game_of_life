import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Settings } from './Settings';

describe('Settings', () => {
  it('test render', () => {
    const element = mount(<Settings />);
  });
});
