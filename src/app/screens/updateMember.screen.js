import React from 'react';
import {NavigatedWrapper} from '../wrappers/navigated.wrapper';
import {UpdatetMemberComponent} from '../components/UpdateMember.component';

export const UpdateMemberScreen = () => {
  return (
    <NavigatedWrapper title="Update Member">
      <UpdatetMemberComponent/>
    </NavigatedWrapper> 
  )
};
