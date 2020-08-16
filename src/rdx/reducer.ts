import { combineReducers } from '@reduxjs/toolkit';
import { appSlice, AppState } from '@/modules/App/duck/reducer';

export type State = {
  app: AppState;
};
export const reducer = combineReducers<State>({
  app: appSlice.reducer,
});
