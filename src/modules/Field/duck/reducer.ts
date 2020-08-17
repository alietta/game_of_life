import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Life {
  alive: boolean;
  age: number;
  position: number;
}
export interface FieldState {
  active: Life[];
  cells: Life[][];
}
const fieldInitialState: FieldState = {
  active: [],
  cells: [[]],
};
export const fieldSlice = createSlice({
  name: 'field',
  initialState: fieldInitialState,
  reducers: {
    setField: (state, { payload }: PayloadAction<Life[][]>) => {
      state.cells = payload;
    },
    clearField: state => {
      state.active = [];
      state.cells = [];
    },
    setActive: (state, { payload }: PayloadAction<Life[]>) => {
      state.active = payload;
    },
  },
});

export const { actions, reducer } = fieldSlice;
