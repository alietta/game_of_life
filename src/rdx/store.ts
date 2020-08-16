import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware  } from 'connected-react-router';
import { fork } from 'redux-saga/effects';
import { loginSaga } from '@/modules/Login/duck/saga';
import { reducer } from './reducer';
import history from './history';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(loginSaga);
}

const middleware = [...getDefaultMiddleware(), routerMiddleware(history), sagaMiddleware];

export const store = configureStore({
  reducer: reducer(history),
  middleware,
});

sagaMiddleware.run(rootSaga);
