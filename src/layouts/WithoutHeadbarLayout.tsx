import React from 'react';
import { Container, useTheme } from 'sancho';
import { Layout } from './LayoutStyles';

export const WithoutHeadbarLayout: React.FC = (props) => {
  const theme = useTheme();
  return (
    <Layout background={theme.colors.background.default}>
      <Container css={{ maxWidth: 1024, height: '100%' }}>
        {props.children}
      </Container>
    </Layout>
  );
};
