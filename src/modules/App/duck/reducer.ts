import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Status = 'loading' | 'success' | 'error';
export interface AppState {
  status: Status;
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
    setStatus: (state, { payload }: PayloadAction<Status>) => {
      state.status = payload;
    },
    switchTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});
