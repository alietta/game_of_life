import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { InterpolationWithTheme } from 'sancho';

export const SettingsRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
`;

export const SettingsElement = styled.div`
  max-width: 260px;
  width: 100%;
  padding: 10px;
`;

export const LayerStyle = css({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  borderRadius: '2px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
});
