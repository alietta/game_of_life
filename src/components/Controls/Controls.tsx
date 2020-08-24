import React, { FC, useCallback } from 'react';
import { RESET, PLAY, FAST, SLOW, PAUSE } from '@/constants';
import {
  Layer,
  IconPause,
  IconFastForward,
  IconPlay,
  IconRewind,
  IconRefreshCw,
  Button,
} from 'sancho';
import { LayerStyle } from './ControlsStyles';

export interface ControlsProps {
  resetGame: () => void;
  changeSpeed: (speed: string) => void;
}
export const Controls: FC<ControlsProps> = props => {
  const { resetGame, changeSpeed } = props;
  const handleClick = useCallback(
    (speed: string) => {
      return () => {
        changeSpeed(speed);
      };
    },
    [changeSpeed]
  );

  return (
    <Layer elevation="xs" css={LayerStyle}>
      <Button
        size="lg"
        name={RESET}
        intent="primary"
        variant="outline"
        onClick={resetGame}
      >
        <IconRefreshCw />
      </Button>
      <Button
        size="lg"
        name={PAUSE}
        intent="primary"
        variant="outline"
        onClick={handleClick(PAUSE)}
      >
        <IconPause />
      </Button>
      <Button
        size="lg"
        name={PLAY}
        intent="primary"
        variant="outline"
        onClick={handleClick(PLAY)}
      >
        <IconPlay />
      </Button>
      <Button
        size="lg"
        name={SLOW}
        intent="primary"
        variant="outline"
        onClick={handleClick(SLOW)}
      >
        <IconRewind />
      </Button>
      <Button
        size="lg"
        name={FAST}
        intent="primary"
        variant="outline"
        onClick={handleClick(FAST)}
      >
        <IconFastForward />
      </Button>
    </Layer>
  );
};
