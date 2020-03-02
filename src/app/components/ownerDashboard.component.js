import React, {useState} from 'react';
import {View} from 'react-native';
import {List, ListItem, Icon, Button, Input} from '@ui-kitten/components';
import {FloatingAction} from "react-native-floating-action";

const actions = [
  {
    text: "Accept Payment",
    icon: require("../../images/checkmark-circle-2-outline.png"),
    name: "bt_accessibility",
    position: 2
  },
  {
    text: "Add Trainee",
    icon: require("../../images/checkmark-circle-2-outline.png"),
    name: "bt_add_trainee",
    position: 1
  },
];

const trainees = Array(50).fill(0).map((_, index) => ({
  firstName: `Trainee`,
  mobileNumber: '8130626713',
  isPresent: false
}));

const renderItemIcon = (style) => <Icon {...style} name='person' />


const TraineeListItem = ({item, index, toggleAttendance}) => {
  
  const renderItemAccessory = (style, item) => 
    <Button style={style} appearance='ghost' onPress={() => toggleAttendance(item)} status={item.isPresent ? 'success' : 'danger'} icon={(style) => <Icon {...style} name={item.isPresent ? 'checkmark-circle-outline' : 'checkmark-circle-2-outline'} />} />

  return (
    <ListItem 
      title={`${item.firstName} ${index + 1}`}
      description={item.mobileNumber}
      icon={renderItemIcon}
      accessory={(style) => renderItemAccessory(style, item)}
    />
  )
};

const TraineeList = ({traineeList}) => {
  return (
    <List
      data={traineeList}
      renderItem={TraineeListItem}
    />
  );
}
export const OwnerDashboardComponent = () => {
  const [filteredTrainees, setFilteredTrainees] = useState(trainees);

  const filterTrainee = (text) => {
    if (!text) {
      setFilteredTrainees(trainees);
    } else {
      const filteredTrainee = trainees.filter((trainee) => {
        return trainee.firstName.toLowerCase().search(text.toLowerCase()) !== -1
      });
      setFilteredTrainees(filteredTrainee);
    }
  }
  return (
    <View style={{flex: 1}}>
      <TraineeList traineeList={filteredTrainees}/>
      <Input placeholder="Search..." onChangeText={filterTrainee}/>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  )
}
