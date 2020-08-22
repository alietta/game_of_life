import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { settingsSlice } from '@/modules/GameSettings/duck/reducer';

export interface SpeedState {
  current: number;
  last: number;
}

const speedInitialState: SpeedState = {
  current: 0,
  last: 10,
};

export const speedSlice = createSlice({
  name: 'speed',
  initialState: speedInitialState,
  reducers: {
    reset: (state) => {
      state.current = 0;
      state.last = 1;
    },
    changeLast: (state, { payload }: PayloadAction<number>) => {
      state.last = payload;
    },
    changeSpeed: (state, { payload }: PayloadAction<string>) => {
      const round = (num: number): number => {
        const row = `${num}`.substr(0, 3);
        return parseFloat(row);
      };
      const speedCounter: {[key: string]: (speed: number) => number} = {
        pause: () => 0,
        play: () => state.last || 1,
        slow: (speed: number) => {
          if (speed <= 1) {
            return 1;
          }
          return speed - 1;
        },
        fast: (speed: number) => {
          if (speed > 10) {
            return 10;
          }
          return speed + 1;
        },
      };
      const newSpeed = speedCounter[payload](state.current);
      if (payload !== 'pause') {
        state.last = newSpeed;
      }
      state.current = newSpeed;
    },
  },
  extraReducers: {
    [settingsSlice.actions.startSpeed.type]: (
      state,
      { payload }: PayloadAction<number>
    ) => {
      state.last = payload;
    },
  },
});

export const { reducer, actions } = speedSlice;
