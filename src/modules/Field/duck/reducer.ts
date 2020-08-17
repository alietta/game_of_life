import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
});

export const { actions, reducer } = fieldSlice;
