import React from 'react';
import {NavigatedWrapper} from '../wrappers/navigated.wrapper';
import {AddMember} from '../components/AddMember.component';

export const AddMemberScreen = () => {
  return (
    <NavigatedWrapper title="Add new member">
      <AddMember />
    </NavigatedWrapper>
  )
};
