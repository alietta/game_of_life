import React, { FC, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStoreSelector } from '@/hooks/useStoreSelector';
import { useHistory } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { actions } from './duck/reducer';

export const Login: FC = () => {
  const dispatch = useDispatch();
  const isAuth = useStoreSelector((state) => state.user.isAuth);
  const history = useHistory();

  useEffect(() => {
    if (isAuth) {
      history.push('/settings');
    }
  }, [isAuth]);

  const onSubmit = useCallback((data: { name: string }) => {
    dispatch(actions.login(data.name));
  }, []);

  return <LoginForm onSubmit={onSubmit} />;
};
