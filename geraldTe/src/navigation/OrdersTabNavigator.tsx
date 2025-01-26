import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentOrderScreen from "../screens/CurrentOrderScreen";
import PastOrderScreen from "../screens/PastOrderScreen";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const OrdersTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Current Order"
      screenOptions={{
        tabBarActiveTintColor: "#E7625F",
        tabBarInactiveTintColor: "#ccc",
      }}
    >
      <Tab.Screen
        name="Current Order"
        component={CurrentOrderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name={"sort-alpha-asc"} size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Past Order"
        component={PastOrderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name={"sort-amount-desc"} size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default OrdersTabNavigator;
