import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {selectedMemberSelector} from '../redux/selectors';
import {useNavigation} from '@react-navigation/core';
import {OwnersRoutes} from '../config/routes';

const mapStateToProps = (state) => ({
  selectedMember: selectedMemberSelector(state)
});

export default UserProfile = connect(mapStateToProps)(({selectedMember:user}) => {
  const navigation = useNavigation();
  const onUpdateDetails = () => navigation.navigate(OwnersRoutes.EditMember.name);

  return (
    <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{user.firstName}</Text>
            <Text style={styles.info}>{user.mobileNumber}</Text>
            <Text style={styles.description}>
              Height: 5'6 | Weight: 55
            </Text>
            <Text style={styles.description}>
              Age: 25 yrs
            </Text>
            
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Train Now</Text>  
            </TouchableOpacity>              
            <TouchableOpacity style={styles.buttonContainer} onPress={onUpdateDetails}>
              <Text>Update Details</Text> 
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130,
    backgroundColor: "#00BFFF",
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});