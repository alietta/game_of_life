import React from 'react';
import { Container, useTheme } from 'sancho';
import { Headbar } from '@/modules/Headbar';
import { Layout } from './LayoutStyles';

export const WithHeadbarLayout: React.FC = (props) => {
  const theme = useTheme();
  return (
    <Layout background={theme.colors.background.default}>
      <Headbar />
      <Container css={{ maxWidth: 1024, paddingTop: 50 }}>
        {props.children}
      </Container>
    </Layout>
  );
};
