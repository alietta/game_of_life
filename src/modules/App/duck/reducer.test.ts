import { appSlice } from './reducer';

describe('App reducers', () => {
  it('setStatus', () => {
    const state = {
      status: 'loading',
      darkTheme: true,
    };
    const action = appSlice.actions.setStatus('success');
    const result = appSlice.reducer(state, action);
    expect(result).toEqual({ status: 'success', darkTheme: true });
  });
  it('setStatus', () => {
    const state = {
      status: 'success',
      darkTheme: true,
    };
    const action = appSlice.actions.switchTheme();
    const result = appSlice.reducer(state, action);
    expect(result).toEqual({ status: 'success', darkTheme: false });
  });
});
