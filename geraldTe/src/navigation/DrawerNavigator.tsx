import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MainTabNavigator from './TabNavigator'; 
import OrdersStackNavigator from './OrdersStackNavigator';
import CartScreen from '../screens/CartScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        drawerStyle: styles.drawerStyle,
        drawerLabelStyle: styles.drawerLabelStyle,
        drawerActiveTintColor: '#FFD700',
        drawerActiveBackgroundColor: '#D35400',
        drawerInactiveTintColor: '#A1A1A1',
        drawerType: 'front',
        overlayColor: 'rgba(0, 0, 0, 0.5)',
      }}
      drawerContent={(props) => (
        <View style={{ flex: 1 }}>
          <View style={styles.drawerHeader}>
            <FontAwesome5 name="medapps" size={20} color="white" />
            <Text style={styles.drawerHeaderText}>Gerald</Text>
          </View>

          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        </View>
      )}
    >
      <Drawer.Screen
        name="Home"
        component={MainTabNavigator}
        options={{
          drawerIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={20}
              color={focused ? '#fff' : '#A1A1A1'}
            />
          ),
          drawerLabel: 'Home',
        }}
      />

      <Drawer.Screen
        name="Orders"
        component={OrdersStackNavigator}
        options={{
          drawerIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={20}
              color={focused ? '#fff' : '#A1A1A1'}
            />
          ),
          drawerLabel: 'Your Orders',
        }}
      />

      <Drawer.Screen
        name="Cart"
        component={CartScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={20}
              color={focused ? '#fff' : '#A1A1A1'}
            />
          ),
          drawerLabel: 'Shopping Cart',
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#2D2D2D',
    width: 230,
  },

  drawerHeader: {
    height: 80,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingTop: 20,
    paddingBottom: 5,
  },

  drawerHeaderText: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
    fontFamily: 'Roboto-Bold',
  },

  drawerLabelStyle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: -5,
    fontFamily: 'Roboto-Medium',
  },
});

export default DrawerNavigator;
