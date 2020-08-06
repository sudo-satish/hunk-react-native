import React from 'react';
import {NavigatedWrapper} from '../wrappers/navigated.wrapper';
import {AddMemberComponent} from '../components/AddMemberComponent';

export const AddMemberScreen = () => {
  return (
    <NavigatedWrapper title="Add new member">
      <AddMemberComponent />
    </NavigatedWrapper>
  )
};
