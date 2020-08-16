import React from 'react';
import { mount } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  it('test render', () => {
    const logout = jest.fn();
    const switchTheme = jest.fn();
    const element = mount(<Header onLogout={logout} switchTheme={switchTheme} />);
    expect(element).toMatchSnapshot();
  });
  it('should render with name props', () => {
    const logout = jest.fn();
    const switchTheme = jest.fn();
    const element = mount(<Header name="Anna" onLogout={logout} switchTheme={switchTheme} />);
    expect(element.text().includes('Anna')).toBe(true);
  });
  it('should call logout', () => {
    const logout = jest.fn();
    const switchTheme = jest.fn();
    const element = mount(<Header name="Anna" onLogout={logout} switchTheme={switchTheme} />);
    element.find("div[name='logout']").simulate('click');
    expect(logout).toHaveBeenCalled();
  });
  it('should call switchTheme', () => {
    const logout = jest.fn();
    const switchTheme = jest.fn();
    const element = mount(<Header name="Anna" onLogout={logout} switchTheme={switchTheme} />);
    element.find("div[name='theme']").simulate('click');
    expect(switchTheme).toHaveBeenCalled();
  });
});
