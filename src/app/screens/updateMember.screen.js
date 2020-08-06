import React from 'react';
import {NavigatedWrapper} from '../wrappers/navigated.wrapper';
import {UpdateMemberComponent} from '../components/UpdateMemberComponent';

export const UpdateMemberScreen = () => {
  console.log('Update Member Screen');
  
  return (
    <NavigatedWrapper title="Update Member">
      <UpdateMemberComponent/>
    </NavigatedWrapper> 
  )
};
