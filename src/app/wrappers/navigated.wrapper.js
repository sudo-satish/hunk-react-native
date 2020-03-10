import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {SafeAreaView} from 'react-native';
import {Divider, Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export const NavigatedWrapper = ({children, title="Hunk"}) => {
  const navigation = useNavigation();

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title={title} alignment='center' leftControl={BackAction()} />
      <Divider />
      {children}
    </SafeAreaView>
  )
}
