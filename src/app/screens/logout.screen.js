import React, {useEffect} from 'react';
import {AuthService} from "../services/auth.service";
import {BlankScreen} from './blank.screen';

const authService = new AuthService();

export const LogoutScreen = ({navigation}) => {
  useEffect(() => {
    async function logout() {
      // await authService.logout();
      navigation.navigate('Home');
    }
    logout();
  })
  return (
    <BlankScreen title="Loging out" />
  )
}
