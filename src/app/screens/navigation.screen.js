import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {WithoutLoginRoutes as Routes} from '../config/routes';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode='none'>
    {
      Reflect.ownKeys(Routes).map((routeKey) => {
        const route = Routes[routeKey];
        return (<Stack.Screen key={route.name} name={route.name} component={route.component} options={route.options}/>)
      })
    }
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
