import React, { FC } from 'react';
import { Header } from './Header';

const Headbar: FC = () => {
  // TODO: take name from store
  const name = 'Anna';
  const onLogout = () => {
    // TODO: dipatch logout action
  };
  const switchTheme = () => {
    // TODO: dipatch theme action
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
