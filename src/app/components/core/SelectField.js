import React from 'react';
import {Controller} from 'react-hook-form';
import {Select} from '@ui-kitten/components';

const useSelectChanges = (initialSelection = null, setValue, fieldName) => {
  const [selectedOption, setSelectedOption] = React.useState(initialSelection);
  return {
    selectedOption,
    onSelect: (value) => {setSelectedOption(value), setValue(fieldName, value.value)},
  };
};

export const SelectField = ({SelectOptions, control, setValue, name, placeholder}) => {
  const options = Reflect.ownKeys(SelectOptions).map(code => ({
    value: code,
    text: SelectOptions[code].label
  }));
  const membershipCycleSelect = useSelectChanges(null, setValue, name);

  return (
    <Controller
      as={
        <Select
          data={options}
          {...membershipCycleSelect}
        />
      }
      control={control}
      name={name}
      placeholder={placeholder}
    />
  )
}