import React from 'react';
import {View} from 'react-native';
import {Text} from '@ui-kitten/components';
import {centerLayoutStyle} from '../styles/screen.style';

export const BlankScreen = ({title}) => {
  return (
    <View style={centerLayoutStyle.centerLayout}>
      <Text category="h1">
        {title}
      </Text>
    </View>
  )
}