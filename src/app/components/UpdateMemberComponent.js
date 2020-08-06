import React from 'react';
import {UpdateMemberForm} from './forms/UpdateMemberForm';
import {selectedMemberSelector} from '../redux/selectors';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  selectedMember: selectedMemberSelector(state)
});

export const UpdateMemberComponent = connect(mapStateToProps)(({selectedMember}) => {
  console.log('Update Member Component');
  
  return (
    <UpdateMemberForm member={selectedMember} />
  )
})
