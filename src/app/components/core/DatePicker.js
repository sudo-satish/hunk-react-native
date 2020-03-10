import React from 'react';
import moment from 'moment';
import {Controller} from 'react-hook-form';
import {Datepicker} from '@ui-kitten/components';
import {getIcon} from './Icon';

const useDateChanges = (initialDate = null, setValue, fieldName) => {
  const [date, setDate] = React.useState(initialDate);
  return {
    date,
    onSelect: (value) => {setDate(value), setValue(fieldName, moment(value).format('DD/MM/YYYY'))},
  };
};

export const DatePicker = ({setValue, name, control, icon = 'calendar'}) => {
  const membershipStartDate = useDateChanges(null, setValue, name);

  return (
    <Controller
      as={
        <Datepicker {...membershipStartDate} icon={getIcon(icon)} />
      }
      control={control}
      name={name}
    />
  )
};
