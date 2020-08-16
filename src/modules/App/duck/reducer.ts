import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  status: string;
  darkTheme: boolean;
}

const appInitialState: AppState = {
  status: 'success',
  darkTheme: true,
};
export const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    loading: (state) => {
      state.status = 'loading';
    },
    success: (state) => {
      state.status = 'success';
    },
    error: (state) => {
      state.status = 'error';
    },
    switchTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});
