import React from 'react';
import { mount } from 'enzyme';
import { PercentFilled } from './PercentFilled';

describe('PercentFilled', () => {
  it('test render', () => {
    const element = mount(<PercentFilled />);
    expect(element).toMatchSnapshot();
  });
  it('should call onValueChange with props', () => {
    const onValueChange = jest.fn();
    const element = mount(<PercentFilled onValueChange={onValueChange} />);
    element.find('input').simulate('change', {
      target: { value: 34 },
    });
    expect(onValueChange).toHaveBeenCalledWith(34);
  });
  it('should call onValueChange with wrong percent more than 100', () => {
    const onValueChange = jest.fn();
    const element = mount(<PercentFilled onValueChange={onValueChange} />);
    element.find('input').simulate('change', {
      target: { value: 315 },
    });
    expect(onValueChange).toHaveBeenCalledWith(100);
  });
  it('should call onValueChange with wrong percent less than 0', () => {
    const onValueChange = jest.fn();
    const element = mount(<PercentFilled onValueChange={onValueChange} />);
    element.find('input').simulate('change', {
      target: { value: -4 },
    });
    expect(onValueChange).toHaveBeenCalledWith(4);
  });
});
