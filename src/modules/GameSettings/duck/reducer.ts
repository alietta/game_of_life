import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  fieldSize: number;
  cellSize: number;
  startSpeed: number;
  percent: number;
}

const settingsInitialState: SettingsState = {
  fieldSize: 18,
  cellSize: 50,
  startSpeed: 10,
  percent: 50,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: settingsInitialState,
  reducers: {
    reset: (state) => {
      state.fieldSize = 18;
      state.cellSize = 50;
      state.startSpeed = 10;
      state.percent = 50;
    },
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
