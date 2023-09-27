import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screen} from '../utils/constants';
import Login from '../screens/primary/auth/Login';
import Register from '../screens/primary/auth/Register';
const Stack = createStackNavigator();
const GuestNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name={Screen.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default GuestNavigator;
