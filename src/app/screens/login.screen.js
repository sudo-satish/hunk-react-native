import React from 'react';
import {SafeAreaView} from 'react-native';
import {Layout} from '@ui-kitten/components';
import {LoginForm} from '../components/forms/LoginForm';

export const LoginScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LoginForm />
      </Layout>
    </SafeAreaView>
  )
}
