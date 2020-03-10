import React from 'react';
import {Button, Text, Layout} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthService} from '../../services/auth.service';
import {WithoutLoginRoutes as routes} from '../../config/routes';
import {showMessage} from 'react-native-flash-message';
import {useForm} from 'react-hook-form';
import {TextInput} from '../core/TextInput';
import {PasswordField} from '../core/PasswordField';

const authService = new AuthService();

const LoginFormComponent = ({onSubmit}) => {
  const {control, handleSubmit} = useForm();

  return (
    <View style={{
      width: '90%'
    }}>
      <View>
        <TextInput
          control={control}
          name="mobileNumber"
          placeholder="Mobile Number"
          keyboardType="number-pad"
        />
      </View>
      <View>
        <PasswordField control={control}/>
      </View>
      <Button onPress={handleSubmit(onSubmit)}> Login </Button>
    </View>
  )
}

export const LoginForm = () => {
  const navigation = useNavigation();

  const onLogin = async (values) => {
    await authService.login(values);
    navigation.navigate('DrawerNavigator');
    showMessage({
      message: "Login Successfull",
      type: "success",
    });
  }

  const onForgotPassword = () => navigation.navigate(routes.ForgotPassword.name);
  const onSignup = () => navigation.navigate(routes.Signup.name);

  return (
    <>
      <LoginFormComponent onSubmit={onLogin}/>
      <View>
      </View>
      <Layout style={styles.container}>
        <Layout style={styles.layout} level='1'>
          <Text style={styles.forgotPassword} onPress={onForgotPassword}>Forgot Password ?</Text>
        </Layout>
        <Layout style={styles.layout} level='1'>
          <Text style={styles.signup} onPress={onSignup}>
            Signup
          </Text>
        </Layout>
      </Layout>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    marginTop: 20
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotPassword: {
    textDecorationLine: 'underline',
    fontStyle: 'italic'
  },
  signup: {
    color: 'blue',
    paddingTop: 20
  }
});