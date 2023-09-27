import {View, Text} from 'react-native';
import React from 'react';
import {Screen} from '../utils/constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ExploreStack, HomeStack, SettingStack} from './RootNavigator';
import Icon from '../components/common/Icon';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={Screen.HOMESTACK}>
      <Tab.Screen
        name={Screen.HOMESTACK}
        component={HomeStack}
        // options={{title: 'Home', headerShown: false}}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon type="ant" name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Screen.SETTINGSTACK}
        component={SettingStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Icon
              type="ionicon"
              name="settings-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screen.EXPLORESTACK}
        component={ExploreStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) => (
            <Icon type="feather" name="globe" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
