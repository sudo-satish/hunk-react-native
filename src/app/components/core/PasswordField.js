import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {Input} from '@ui-kitten/components';
import {getIcon} from './Icon';
import {getPlainText} from '../../utils';

export const PasswordField = ({name = "password", placeholder = "********", control}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <Controller
      as={
        <Input
          icon={getIcon(secureTextEntry ? 'eye-off' : 'eye')}
          secureTextEntry={secureTextEntry}
          onIconPress={() => setSecureTextEntry(!secureTextEntry)}
        />
      }
      placeholder={placeholder}
      name={name}
      control={control}
      onChange={getPlainText}
    />
  )
};
