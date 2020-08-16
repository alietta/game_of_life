import { combineReducers } from '@reduxjs/toolkit';
import { appSlice, AppState } from '@/modules/App/duck/reducer';
import { userSlice, User } from '@/modules/Login/duck/reducer';

export type State = {
  app: AppState;
  user: User;
};
export const reducer = combineReducers<State>({
  app: appSlice.reducer,
  user: userSlice.reducer,
});
