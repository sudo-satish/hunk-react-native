import React, {useState} from 'react';
import {View} from 'react-native';
import {Input, Button, Divider, Icon} from '@ui-kitten/components';
import {AuthService} from '../../services/auth.service';
import {useNavigation} from '@react-navigation/core';
import {showMessage} from 'react-native-flash-message';
const authService = new AuthService();

export const Signupform = ({}) => {

  const [gymName, setGymName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const renderIcon = (style) => (
    <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'} />
  );

  const onIconPress = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const onSignup = async () => {
    await authService.signup({
      gym: {
        name: gymName
      },
      owner: {
        mobileNumber,
        password,
        firstName,
        lastName,
      }
    });

    navigation.navigate('DrawerNavigator');
    showMessage({
      message: "Signup Successfull",
      type: "success",
    });
  }
  return (
    <>
      <View>
        <Input
          placeholder='Gym Name'
          value={gymName}
          onChangeText={setGymName}
        />
        <Divider />
        <Input
          placeholder='Mobile Number'
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
        <Input
          placeholder='First Name'
          value={firstName}
          onChangeText={setFirstName}
        />
        <Input
          placeholder='Last Name'
          value={lastName}
          onChangeText={setLastName}
        />
        <Input
          value={password}
          placeholder='********'
          icon={renderIcon}
          secureTextEntry={secureTextEntry}
          onIconPress={onIconPress}
          onChangeText={setPassword}
        />
        <Button onPress={onSignup} >Signup </Button>
      </View>
      <View>
      </View>
    </>
  )
}
