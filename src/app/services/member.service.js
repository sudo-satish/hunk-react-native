import Service from './service';
import {store} from '../redux/store';
import {addMember, setSelectedMember} from '../redux/members';

export class MemberService extends Service {
  addNewMember(member) {
    store.dispatch(addMember({
      ...member,
      _id: member.mobileNumber,
      isPresent: false
    }));
  }

  setSelectedMember(member) {
    store.dispatch(setSelectedMember(member));
  }
}
