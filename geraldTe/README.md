# Overview

This React Native EXPO application demonstrates how to implement three types of navigation in a React Native app:

    Drawer Navigation - A sidebar that contains multiple screens.
    Stack Navigation - Screens pushed and popped in a stack, creating a flow.
    Tab Navigation - A bottom navigation bar for easy switching between screens.

Each navigation type is linked together to provide a seamless user experience.

- Clone the Repo 
    - https://github.com/ajay17141994/gerald.git

- Run yarn install command
    - This will install all the dependencies

- Run yarn start
    - this will start the application

- Press i for IOS simulator, a for android emulator and w for web browser in order to run the application

# File Structure
```
/src
  /screens
    CartScreen.tsx
    CurrentOrderScreen.tsx
    HomeScreen.tsx
    PastOrderScreen.tsx
    StartScreen.tsx
  /navigation
    DrawerNavigator.tsx
    OrdersStackNavigator.tsx
    OrdersTabNavigator.tsx
    RootNavigator.tsx
    StackNavigator.tsx
    MainTabNavigator.tsx
/app/_layout.tsx
```
# Screens
StartScreen
The StartScreen introduces the user to the app with animated elements that fade in and slide from the bottom. It contains an app description and navigation hints for users.

    Animations: Title fades in, subtitle slides up, sections animate in with opacity and translation.
    Sections: Provide details about the app's features, including Drawer Navigation, Tab Navigation, and Stack Navigation.```

HomeScreen
The HomeScreen is a dummy home page with animated sections. It introduces the user to the app's services and guides them to get started.

    Sections: "Explore Our Services", "Get Started", "Stay Connected", "Help & Support".

CartScreen
This screen displays a shopping cart, including the list of items in the cart. You can use this screen to review added items before checking out.

CurrentOrderScreen & PastOrderScreen
These screens display the current and past orders of a user. The OrdersTabNavigator manages switching between these two tabs.

    Current Order: Shows ongoing orders.
    Past Order: Displays completed orders.

# Navigators
DrawerNavigator
DrawerNavigator is responsible for handling the side drawer that slides in when the user clicks on the hamburger menu.

Screens in DrawerNavigator:

    Start: Directs to the StartScreen.
    Home: Directs to the MainTabNavigator, which contains the Home, Cart, and Orders tabs.
    Orders: Navigates to the OrdersStackNavigator.
    Cart: Navigates to the CartScreen.



OrdersStackNavigator
OrdersStackNavigator is a stack navigator that includes the following screens:

    OrdersTabNavigator: A tab navigator with two screens: "Current Order" and "Past Order".
    CartScreen: An additional screen to view the cart.

MainTabNavigator
MainTabNavigator is a bottom tab navigator with three tabs:

    Home: A tab that leads to the Home screen.
    Cart: A tab that leads to the CartScreen.
    Orders: A tab that leads to the OrdersStackNavigator.

# Dependencies
```
-@react-navigation/native - For navigation management.
-@react-navigation/drawer - For the drawer navigation.
-@react-navigation/stack - For stack navigation.
-@react-navigation/bottom-tabs - For tab navigation.
-react-native-gesture-handler - To manage gestures in the app.
-react-native-reanimated - For animations.
-@expo/vector-icons - For vector icons like Ionicons and FontAwesome.
```
[Watch project recording](recording.mov)

If you are unable to see CLICK ON VIEW RAW and download the same
