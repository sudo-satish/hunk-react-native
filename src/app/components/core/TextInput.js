import React from 'react';
import {Controller} from 'react-hook-form';
import {Input} from '@ui-kitten/components';
import {getPlainText} from '../../utils';

export const TextInput = ({name, control, ...props}) => {
  return <Controller
    as={
      <Input />
    }
    name={name}
    control={control}
    onChange={getPlainText}
    {...props}
  />
}
