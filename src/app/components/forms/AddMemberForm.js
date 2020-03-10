import React from 'react';
import {MemberService} from '../../services/member.service';
import {showMessage} from 'react-native-flash-message';
import {MemberFormComponent} from './MemberFormComponent';
const memberService = new MemberService();

export const AddMemberForm = () => {
  const onAddNewMember = (values) => {
    console.log(values)
    memberService.addNewMember(values);
    showMessage({
      message: "Member Registered Successfully",
      type: "success",
    });
  }

  return (
    <MemberFormComponent onSubmit={onAddNewMember}/>
  )
};
