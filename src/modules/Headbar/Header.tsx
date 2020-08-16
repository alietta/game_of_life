import React, { FC } from 'react';
import { useTheme, Container, Text, IconLogOut, IconSun, Button } from 'sancho';

interface HeaderProps {
  onLogout: () => void;
  name?: string;
  switchTheme: () => void;
}
const Header: FC<HeaderProps> = (props) => {
  const { name = '', onLogout, switchTheme } = props;
  const theme = useTheme();

  return (
    <div
      css={{
        height: 50,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        background: theme.colors.background.tint1,
      }}
    >
      <Container
        css={{
          minWidth: 1024,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Button
          variant='ghost'
          onClick={switchTheme}
        >
          <IconSun />
        </Button>
        <Text css={{ marginRight: 10 }}>{name}</Text>
        <Button
          variant='ghost'
          onClick={onLogout}
        >
          <IconLogOut />
        </Button>
      </Container>
    </div>
  );
};
export { Header };
