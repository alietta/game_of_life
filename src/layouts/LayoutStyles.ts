import styled from '@emotion/styled';

export const Layout = styled<'div', { background: string }>('div')`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background: ${({ background = 'white ' }) => background};
`;
