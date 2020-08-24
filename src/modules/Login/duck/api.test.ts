import { login, logout, getUserName, isLoggedIn } from './api';


describe('test login api', () => {
  it('login', async () => {
    // eslint-disable-next-line
    const sp = jest.spyOn(window.localStorage.__proto__, 'setItem');
    await login('a');
    expect(sp).toHaveBeenCalledWith('login', 'a');
  });
  it('logout', async () => {
    // eslint-disable-next-line
    const sp = jest.spyOn(window.localStorage.__proto__, 'removeItem');
    await logout();
    expect(sp).toHaveBeenCalledWith('login');
  });
  it('getUserName', async () => {
    // eslint-disable-next-line
    const sp = jest.spyOn(window.localStorage.__proto__, 'getItem');
    const name = await getUserName();
    expect(sp).toHaveBeenCalledWith('login');
    expect(name).toEqual('');
  });
  it('isLoggedIn', async () => {
    // eslint-disable-next-line
    const sp = jest.spyOn(window.localStorage.__proto__, 'getItem');
    const isAuth = await isLoggedIn();
    expect(sp).toHaveBeenCalledWith('login');
    expect(isAuth).toEqual(false);
  });
});

