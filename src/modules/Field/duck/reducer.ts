import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { settingsSlice } from '@/modules/GameSettings/duck/reducer';

export interface FieldState {
  active: number[];
  cells: number[][];
}
const fieldInitialState: FieldState = {
  active: [],
  cells: [[]],
};
export const fieldSlice = createSlice({
  name: 'field',
  initialState: fieldInitialState,
  reducers: {
    setField: (state, { payload }: PayloadAction<number[][]>) => {
      state.cells = payload;
    },
    clearField: state => {
      state.active = [];
      state.cells = [];
    },
    setActive: (state, { payload }: PayloadAction<number[]>) => {
      state.active = payload;
    }
  },
  extraReducers: {
    [settingsSlice.actions.reset.type]: (
      state
    ) => {
      state.active = [];
      state.cells = [];
    },
  },
});

export const { actions, reducer } = fieldSlice;
