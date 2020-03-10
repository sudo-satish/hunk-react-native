import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View} from 'react-native';
import {List, ListItem, Icon, Button, Input, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {FloatingAction} from "react-native-floating-action";
import {membersAsListSelector} from '../redux/selectors';
import {updateMember} from '../redux/members';
import {useNavigation} from '@react-navigation/core';
import {getIcon} from './core/Icon';
import {OwnersRoutes} from '../config/routes';
import {MemberService} from '../services/member.service';
const memberService = new MemberService();

const actions = [
  {
    text: "Add Member",
    icon: require("../../images/checkmark-circle-2-outline.png"),
    name: "bt_add_member",
    position: 1
  },
];

const traineeListItemRenderer = ({item, toggleAttendance, onEditMember}) => {
  const renderItemAccessory = (style, item) => 
    <Button style={style} appearance='ghost' onPress={() => toggleAttendance(item)} status={item.isPresent ? 'success' : 'danger'} icon={(style) => <Icon {...style} name={item.isPresent ? 'checkmark-circle-outline' : 'checkmark-circle-2-outline'} />} />

  return (
    <ListItem
      title={item.firstName}
      description={item.mobileNumber}
      icon={getIcon('person')}
      onPress={() => onEditMember(item)}
      accessory={(style) => renderItemAccessory(style, item)}
    />
  )
};

const TraineeList = ({traineeList}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const toggleAttendance = (member) => {
    dispatch(updateMember(
      {
        ...member,
        isPresent: !member.isPresent
      }
    ))
  };

  const onEditMember = (member) => {
    memberService.setSelectedMember(member);
    navigation.navigate(OwnersRoutes.EditMember.name);
  }
  return (
    <List
      data={traineeList}
      renderItem={({item, index}) => traineeListItemRenderer({item, index, toggleAttendance, onEditMember})}
    />
  );
}

const OpenSideMenuBar = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
  }
  return <TopNavigationAction icon={getIcon('menu-outline')} onPress = {openDrawer} />
};

const OwnerDashboardComponent = ({members}) => {
  const navigation = useNavigation();

  const [filteredTrainees, setFilteredTrainees] = useState(members);
  const [filterText, setFilterText] = useState('');

  useEffect(()=> {
    if (!filterText) {
      setFilteredTrainees(members);
    } else {
      const filteredTrainee = members.filter((trainee) => {
        return trainee.firstName.toLowerCase().search(filterText.toLowerCase()) !== -1
      });
      setFilteredTrainees(filteredTrainee);
    }
  }, [filterText, members]);

  return (
    <View style={{flex: 1}}>
      <TopNavigation title='Members' alignment='center' leftControl={OpenSideMenuBar()} />
      <TraineeList traineeList={filteredTrainees}/>
      <Input placeholder="Search..." onChangeText={setFilterText}/>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          if (name === "bt_add_member") {
            navigation.navigate(OwnersRoutes.AddMember.name)
          }
        }}
      />
    </View>
  )
}

const mapStateToProps = (state) => ({
  members: membersAsListSelector(state)
});

export default connect(mapStateToProps)(OwnerDashboardComponent)
