import React, {useState} from 'react';
import {Input, Button} from '@ui-kitten/components';
import {View} from 'react-native';
import {AuthService} from '../../services/auth.service';
const authService = new AuthService();


export const ForgotPasswordForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const onForgotPassword = () => {
    authService.forgotPassword(mobileNumber);
  };

  return (
    <View style={{
      width: '90%'
    }}>
      <Input
        placeholder='Mobile Number'
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      <Button onPress={onForgotPassword} >Send OTP </Button>
    </View>
  )
};
