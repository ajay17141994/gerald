import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CurrentOrderScreen from '../screens/CurrentOrderScreen';
import PastOrderScreen from '../screens/PastOrderScreen';

const Stack = createStackNavigator();

export const OrdersStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CurrentOrder">
      <Stack.Screen name="Current Order" component={CurrentOrderScreen} />
      <Stack.Screen name="Past Order" component={PastOrderScreen} />
    </Stack.Navigator>
  );
};

