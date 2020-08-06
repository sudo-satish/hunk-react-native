import React from 'react';
import {NavigatedWrapper} from '../wrappers/navigated.wrapper';
import UserProfileComponent from '../components/UserProfileComponent';

export const UserProfileScreen = () => {
  return (
    <NavigatedWrapper title="Member">
      <UserProfileComponent />
    </NavigatedWrapper>
  )
};
