import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Settings } from './Settings';

describe('Settings', () => {
  it('test render', () => {
    const element = mount(<Settings onSubmit={jest.fn()} />);
    expect(element).toMatchSnapshot();
  });
  it('should call onSubmit from props by submit action', () => {
    const onSubmit = jest.fn();
    const element = mount(<Settings onSubmit={onSubmit} />);
    element.find('form').simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });
  it('should call onSubmit from props by button click', () => {
    const onSubmit = jest.fn();
    const element = mount(<Settings onSubmit={onSubmit} />);
    element.find('button').simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });
});
