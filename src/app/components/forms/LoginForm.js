import React, {useState} from 'react';
import {Input, Button, Icon, Text, Layout} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthService} from '../../services/auth.service';
import {WithoutLoginRoutes as routes} from '../../config/routes';
import {showMessage} from 'react-native-flash-message';
const authService = new AuthService();

export const LoginForm = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onIconPress = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (style) => (
    <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'} />
  );

  const onLogin = async () => {
    await authService.login({
      mobileNumber,
      password
    });

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
      <View style={{
        width: '90%'
      }}>
        <Input
          placeholder='Mobile Number'
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
        <Input
          value={password}
          placeholder='********'
          icon={renderIcon}
          secureTextEntry={secureTextEntry}
          onIconPress={onIconPress}
          onChangeText={setPassword}
        />
        <Button onPress={onLogin} >Login </Button>
      </View>
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