import React, { FC, useState, ChangeEvent } from 'react';
import { InputGroup, Input } from 'sancho';

export interface PercentFilledProps {
  onValueChange?: (value: number) => void;
}

const PercentFilled: FC<PercentFilledProps> = props => {
  const { onValueChange } = props;
  const [value, setValue] = useState<number | string>(50);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (value !== '') {
      const percent = Math.abs(parseInt(event.target.value, 10));
      const roundedPercent = percent <= 100 ? percent : 100;
      setValue(roundedPercent);
      onValueChange && onValueChange(roundedPercent);
    } else {
      setValue(value);
      onValueChange && onValueChange(0);
    }
  };

  return (
    <InputGroup
      label="Percent filled"
      css={{ display: 'flex', flexDirection: 'column' }}
    >
      <Input
        inputSize="lg"
        type="number"
        placeholder="0"
        value={value}
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export { PercentFilled };
