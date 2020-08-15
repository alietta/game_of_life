import React from 'react';
import { mount } from 'enzyme';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('test render', () => {
    const onSubmit = jest.fn();
    const element = mount(<LoginForm onSubmit={onSubmit} />);
    expect(element).toMatchSnapshot();
  });
  it('should call onSubmit with props', () => {
    const onSubmit = jest.fn();
    const element = mount(<LoginForm onSubmit={onSubmit} />);
    element.find('input').simulate('change', {
      target: { value: 'Ivan' },
    });
    element.find('button').simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit.mock.calls[0][0]).toMatchObject({ name: 'Ivan' });
  });
});
