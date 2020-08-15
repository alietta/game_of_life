import React, { FC } from 'react';
import { PLAY, FAST, SLOW, PAUSE } from '@/constants';
import {
  Layer,
  IconPause,
  IconFastForward,
  IconPlay,
  IconRewind,
  IconRefreshCw,
  Button,
} from 'sancho';

export interface ControlsProps {
  resetGame: () => void;
  changeSpeed: (speed: string) => void;
}
const Controls: FC<ControlsProps> = props => {
  const { resetGame, changeSpeed } = props;
  const handleClick = (speed: string) => {
    return () => {
      changeSpeed(speed);
    };
  };

  return (
    <Layer elevation="xs">
      <Button
        size="lg"
        name="reset"
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
export { Controls };
