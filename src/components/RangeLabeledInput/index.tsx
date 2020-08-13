import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import { useTheme, Text, InputGroup, Input } from 'sancho';

type Props = {
  formValue?: (value: string) => string;
  labelName: string;
  onValueChange?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const RangeLabeledInput: FC<Props> = props => {
  const {
    formValue,
    labelName,
    onValueChange,
    max = 10,
    min = 1,
    step = 1,
    ...inputProps
  } = props;
  const [value, setValue] = useState<string>(`${min}`);
  const [label, setLabel] = useState<string>('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setValue(value);
    onValueChange && onValueChange(value);
  };

  useEffect(() => {
    const formatedValue = formValue ? formValue(value) : value;
    setLabel(`${labelName}: ${formatedValue}`);
  }, [value, labelName]);

  return (
    <InputGroup label={label} css={{ display: 'flex', flexDirection: 'column' }}>
      <input
        {...inputProps}
        placeholder="Name"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
      <div css={{ display: 'flex', justifyContent: 'space-between', padding: '0 5px' }}>
        <Text>{min}</Text>
        <Text>{max}</Text>
      </div>
    </InputGroup>
  );
};

export { RangeLabeledInput };
