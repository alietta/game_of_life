import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter, RouterState  } from 'connected-react-router';
import { History  } from 'history';
import { appSlice, AppState } from '@/modules/App/duck/reducer';
import { userSlice, User } from '@/modules/Login/duck/reducer';
import { settingsSlice, SettingsState } from '@/modules/GameSettings/duck/reducer';

export type State = {
  app: AppState;
  user: User;
  settings: SettingsState;
  router: RouterState;
};
export const reducer = (history: History) => combineReducers<State>({
  app: appSlice.reducer,
  user: userSlice.reducer,
  settings: settingsSlice.reducer,
  router: connectRouter(history),
});
