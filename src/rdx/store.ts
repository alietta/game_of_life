import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { loginSaga } from '@/modules/Login/duck/saga';
import { reducer } from './reducer';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(loginSaga);
}

const middleware = [...getDefaultMiddleware(), sagaMiddleware];

export const store = configureStore({
  reducer,
  middleware,
});

sagaMiddleware.run(rootSaga);
