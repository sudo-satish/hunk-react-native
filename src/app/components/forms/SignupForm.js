import React from 'react';
import {View} from 'react-native';
import {Button, Divider} from '@ui-kitten/components';
import {AuthService} from '../../services/auth.service';
import {useNavigation} from '@react-navigation/core';
import {showMessage} from 'react-native-flash-message';
import {useForm} from 'react-hook-form';
import {TextInput} from '../core/TextInput';
import {PasswordField} from '../core/PasswordField';
const authService = new AuthService();

const SignupFormComponent = ({onSubmit}) => {
  const {control, handleSubmit} = useForm();
  return (
    <View>
      <TextInput name="gym.name" placeholder="Gym Name" control={control} />
      <Divider />
      <TextInput name="owner.mobileNumber" placeholder="Mobile Number" control={control} />
      <TextInput name="owner.firstName" placeholder="First Name" control={control} />
      <TextInput name="owner.lastName" placeholder="Last Name" control={control} />
      <PasswordField name="owner.password" control={control} />
      <Button onPress={handleSubmit(onSubmit)} >Signup </Button>
    </View>
  )
}

export const Signupform = ({}) => {
  const navigation = useNavigation();
  const onSignup = async (values) => {
    await authService.signup(values);
    navigation.navigate('DrawerNavigator');
    showMessage({
      message: "Signup Successfull",
      type: "success",
    });
  }
  return (
    <>
      <SignupFormComponent onSubmit={onSignup}/>
      <View>
      </View>
    </>
  )
}
