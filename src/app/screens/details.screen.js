import React from 'react';
import {SafeAreaView} from 'react-native';
import {Divider, Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import {BlankScreen} from './blank.screen';

const BackIcon = (style) => (
  <Icon {...style} name='arrow-back' />
);

export const DetailsScreen = ({navigation}) => {

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation title='MyApp' alignment='center' leftControl={BackAction()} />
      <Divider />
      <BlankScreen title="Details" />
    </SafeAreaView>
  );
};