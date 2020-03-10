import createDuck from './createDuck';
import {normalize} from '../utils';
import {membersList} from '../dummyData/membersList';

const _initialState = {
  membersList: normalize(membersList),
  selectedMember: {}
};

const [{
  addMember,
  updateMember,
  setSelectedMember
}, reducer] = createDuck('app/members', {
  _initialState,
  addMember: member => state => ({
    ...state,
    membersList: {
      ...state.membersList,
      [member._id]: member
    }
  }),

  updateMember: member => state => ({
    ...state,
    membersList: {
      ...state.membersList,
      [member._id]: member
    }
  }),

  setSelectedMember: member => state => ({
    ...state,
    selectedMember: member
  })
});

export {
  addMember,
  updateMember,
  setSelectedMember
}

export default reducer;