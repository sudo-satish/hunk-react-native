import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Drawer as UIKittenDrawer} from '@ui-kitten/components';
import {OwnersRoutes} from '../config/routes';

const Drawer = createDrawerNavigator();

const DrawerContent = ({navigation, state}) => {
  const ownerRouteKeys = Reflect.ownKeys(OwnersRoutes);
  const onSelect = (index) => {
    navigation.navigate(state.routeNames[index]);
  };
  return (
    <UIKittenDrawer
      data={ownerRouteKeys.map(ownerRouteKey => ({title: OwnersRoutes[ownerRouteKey].drawerTitle}))}
      selectedIndex={state.index}
      onSelect={onSelect}
    />
  );
};

export const DrawerNavigator = () => {
  const ownerRouteKeys = Reflect.ownKeys(OwnersRoutes);
  return (
  <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    {
      ownerRouteKeys.map(ownerRouteKey => 
        <Drawer.Screen
          key={ownerRouteKey}
          options={OwnersRoutes[ownerRouteKey].options}
          name={OwnersRoutes[ownerRouteKey].name}
          component={OwnersRoutes[ownerRouteKey].component} />
      )
    }
  </Drawer.Navigator>
)
};
