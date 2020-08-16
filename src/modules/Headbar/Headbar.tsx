import React, { FC } from 'react';
import { useStoreSelector } from '@/hooks/useStoreSelector';
import { useDispatch  } from 'react-redux';
import { appSlice } from '@/modules/App/duck/reducer';
import { userSlice } from '@/modules/Login/duck/reducer';
import { Header } from './Header';

const Headbar: FC = () => {
  const dispatch = useDispatch();
  const name = useStoreSelector(state => state.user.name);
  const onLogout = () => {
    dispatch(userSlice.actions.logout());
  };
  const switchTheme = () => {
    dispatch(appSlice.actions.switchTheme());
  };


  return (
    <Header
      name={name}
      onLogout={onLogout}
      switchTheme={switchTheme}
    />
  );
};
export { Headbar };
