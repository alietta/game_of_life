import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  fieldSize: number;
  cellSize: number;
  startSpeed: number;
  percent: number;
}

const settingsInitialState: SettingsState = {
  fieldSize: 10,
  cellSize: 5,
  startSpeed: 1,
  percent: 50,
};

export const settingsSlice = createSlice({
  name: 'user',
  initialState: settingsInitialState,
  reducers: {
    field: (state, { payload }: PayloadAction<number>) => {
      state.fieldSize = payload;
    },
    cell: (state, { payload }: PayloadAction<number>) => {
      state.cellSize = payload;
    },
    startSpeed: (state, { payload }: PayloadAction<number>) => {
      state.startSpeed = payload;
    },
    percent: (state, { payload }: PayloadAction<number>) => {
      state.percent = payload;
    },
  },
});

export const { reducer, actions } = settingsSlice;
