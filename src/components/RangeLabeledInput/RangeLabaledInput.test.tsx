import React from 'react';
import { mount } from 'enzyme';
import { RangeLabeledInput } from './RangeLabeledInput';

describe('RangeLabeledInput', () => {
  it('test render', () => {
    const element = mount(<RangeLabeledInput labelName='values' />);
    expect(element).toMatchSnapshot();
  });
  it('should call onValueChange with props', () => {
    const onValueChange = jest.fn();
    const element = mount(<RangeLabeledInput labelName='values' onValueChange={onValueChange} />);
    element.find('input').simulate('change', {
      target: { value: '4' },
    });
    expect(onValueChange).toHaveBeenCalled();
    expect(onValueChange.mock.calls[0][0]).toBe('4');
  });
  it('should call formValue', () => {
    const formValue = jest.fn();
    const element = mount(<RangeLabeledInput labelName='values' formValue={formValue} />);
    element.find('input').simulate('change', {
      target: { value: '4' },
    });
    expect(formValue).toHaveBeenCalled();
  });
});
