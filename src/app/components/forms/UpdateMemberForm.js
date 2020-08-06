import React from 'react';
import {MemberFormComponent} from './MemberFormComponent';

export const UpdateMemberForm = ({member}) => {

  console.log('Update Member', member);
  const onUpdate = (values) => {
    console.log(values);
  }
  return (
    <MemberFormComponent defaultValues={member} onSubmit={onUpdate}/>
  )
};
