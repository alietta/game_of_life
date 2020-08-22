import React from 'react';
import { mount } from 'enzyme';
import { RESET, PLAY, FAST, SLOW, PAUSE } from '@/constants';
import { Controls } from './Controls';

describe('Controls', () => {
  it('test render', () => {
    const resetGame = jest.fn();
    const changeSpeed = jest.fn();
    const element = mount(<Controls resetGame={resetGame} changeSpeed={changeSpeed} />);
    expect(element).toMatchSnapshot();
  });
  it('should call reset with props', () => {
    const resetGame = jest.fn();
    const changeSpeed = jest.fn();
    const element = mount(
      <Controls resetGame={resetGame} changeSpeed={changeSpeed} />
    );
    element.find(`div[name='${RESET}']`).simulate('click');
    expect(resetGame).toHaveBeenCalled();
  });
  it('should call pause with props', () => {
    const resetGame = jest.fn();
    const changeSpeed = jest.fn();
    const element = mount(
      <Controls resetGame={resetGame} changeSpeed={changeSpeed} />
    );
    element.find(`div[name='${PAUSE}']`).simulate('click');
    expect(changeSpeed).toHaveBeenCalledWith(PAUSE);
  });
  it('should call play with props', () => {
    const resetGame = jest.fn();
    const changeSpeed = jest.fn();
    const element = mount(
      <Controls resetGame={resetGame} changeSpeed={changeSpeed} />
    );
    element.find(`div[name='${PLAY}']`).simulate('click');
    expect(changeSpeed).toHaveBeenCalledWith(PLAY);
  });
  it('should call fast speed with props', () => {
    const resetGame = jest.fn();
    const changeSpeed = jest.fn();
    const element = mount(
      <Controls resetGame={resetGame} changeSpeed={changeSpeed} />
    );
    element.find(`div[name='${FAST}']`).simulate('click');
    expect(changeSpeed).toHaveBeenCalledWith(FAST);
  });
  it('should call slow speed with props', () => {
    const resetGame = jest.fn();
    const changeSpeed = jest.fn();
    const element = mount(
      <Controls resetGame={resetGame} changeSpeed={changeSpeed} />
    );
    element.find(`div[name='${SLOW}']`).simulate('click');
    expect(changeSpeed).toHaveBeenCalledWith(SLOW);
  });
});
