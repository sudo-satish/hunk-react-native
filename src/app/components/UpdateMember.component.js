import React from 'react';
import {UpdateMemberForm} from './forms/UpdateMemberForm';
import {selectedMemberSelector} from '../redux/selectors';
import {connect} from 'react-redux';
import Profile from './UserProfileComponent';

const mapStateToProps = (state) => ({
  selectedMember: selectedMemberSelector(state)
});


export const UpdatetMemberComponent = connect(mapStateToProps)(({selectedMember}) => {
  return (
    // <UpdateMemberForm member={selectedMember} />
    <Profile />
  )
})
