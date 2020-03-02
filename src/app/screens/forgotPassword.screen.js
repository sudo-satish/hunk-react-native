import React from 'react';
import {Layout} from '@ui-kitten/components';
import {NavigatedWrapper} from '../wrappers/navigated.wrapper';
import {ForgotPasswordForm} from '../components/forms/ForgotPasswordForm';

export const ForgotPassword = () => {
  return (
    <NavigatedWrapper>
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ForgotPasswordForm />
        {/* <Text>asdfsdf</Text> */}
      </Layout>
    </NavigatedWrapper>
  )
}
