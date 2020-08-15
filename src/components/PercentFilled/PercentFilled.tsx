import React, { FC, useState, ChangeEvent } from 'react';
import { InputGroup, Input } from 'sancho';

interface Props {
  onValueChange?: (value: string) => void;
}

const PercentFilled: FC<Props> = props => {
  const { onValueChange } = props;
  const [value, setValue] = useState<number | string>(0);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (value !== '') {
      const percent = Math.abs(parseInt(event.target.value, 10));
      setValue(percent <= 100 ? percent : 100);
    } else {
      setValue(value);
    }
    onValueChange && onValueChange(value);
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
