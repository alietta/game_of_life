import React, { FC, useState, ChangeEvent, useEffect, useCallback } from 'react';
import { Text, InputGroup } from 'sancho';

export type RangeLabeledInputProps = {
  formValue?: (value: string) => string;
  labelName: string;
  onValueChange?: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const RangeLabeledInput: FC<RangeLabeledInputProps> = props => {
  const {
    formValue,
    labelName,
    onValueChange,
    max = 10,
    min = 1,
    step = 1,
    ...inputProps
  } = props;
  const getLabel = useCallback((val: string) => {
    const formatedValue = formValue ? formValue(val) : val;
    return `${labelName}: ${formatedValue}`;
  }, [labelName]);
  const [value, setValue] = useState<string>(`${max}`);
  const [label, setLabel] = useState<string>(getLabel(`${max}`));
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: rangeValue } = event.target;
    setValue(event.target.value);
    onValueChange && onValueChange(rangeValue);
  };

  useEffect(() => {
    setLabel(getLabel(value));
  }, [value]);

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
