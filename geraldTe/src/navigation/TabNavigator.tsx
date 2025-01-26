import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'; 
import CartScreen from '../screens/CartScreen';
import OrdersStackNavigator from './OrdersStackNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#E7625F',
        tabBarInactiveTintColor: '#ccc',
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons 
              name={'cart'} 
              size={24} 
              color={color} 
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Orders" 
        component={OrdersStackNavigator} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <FontAwesome 
              name={'filter'} 
              size={24} 
              color={color} 
            />
          ),
        }} 
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
