import {createSelector} from 'reselect';
import {deNormalize} from '../utils';

export const membersSelector = state => state.members.membersList;
export const selectedMemberSelector = state => state.members.selectedMember;

export const membersAsListSelector = createSelector(
  membersSelector,
  deNormalize
);
