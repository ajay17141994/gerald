import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNavigator from './DrawerNavigator'; 

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={DrawerNavigator} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
