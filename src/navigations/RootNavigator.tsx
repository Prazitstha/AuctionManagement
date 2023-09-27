import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/primary/HomeScreen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screen} from '../utils/constants';
import AuthNavigator from './AuthNavigator';
import GuestNavigator from './GuestNavigator';
import SettingScreen from '../screens/primary/SettingScreen';
import ProductDetails from '../components/common/ProductCard/ProductDetails';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen
        name={Screen.HOME}
        component={HomeScreen}
        options={{title: 'Welcome', headerShown: false}}
      />
      <Stack.Screen
        name={Screen.PRODUCT_DETAIL}
        component={ProductDetails}
        options={{title: 'Details', headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const SettingStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Setting'}>
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{title: 'Welcome', headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export const ExploreStack = () => {
  return (
    <Stack.Navigator initialRouteName="Display">
      <Stack.Screen
        name="Explore"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const RootNavigator = () => {
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  return (
    <Stack.Navigator
      initialRouteName={
        hasLoggedIn ? Screen.AUTHNAVIGATOR : Screen.GUESTNAVIGATOR
      }
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={Screen.AUTHNAVIGATOR}
        component={AuthNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name={Screen.GUESTNAVIGATOR} component={GuestNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
