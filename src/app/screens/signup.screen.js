import React from 'react';
import {NavigatedWrapper} from "../wrappers/navigated.wrapper";
import {Signupform} from '../components/forms/SignupForm';

export const SignupScreen = () => {
  return (
    <NavigatedWrapper>
      <Signupform />
    </NavigatedWrapper>
  )
}
