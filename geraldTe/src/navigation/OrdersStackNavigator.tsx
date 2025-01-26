import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrdersTabNavigator from './OrdersTabNavigator'; 
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const OrdersStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrdersTab"
        component={OrdersTabNavigator} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ title: 'Other Screen' }}
      />
    </Stack.Navigator>
  );
};

export default OrdersStackNavigator;
