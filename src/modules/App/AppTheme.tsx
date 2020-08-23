import React, { FC } from 'react';
import { DarkMode, LightMode } from 'sancho';

interface Props {
  darkTheme: boolean;
}

export const AppTheme: FC<Props> = (props) => {
  const { darkTheme, children } = props;
  const Theme = darkTheme ? DarkMode : LightMode;
  return (
    <Theme>
      {children}
    </Theme>
  );
};
