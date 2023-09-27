import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Screen} from '../utils/constants';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTabNavigator';
import Notification from '../screens/primary/HomeScreen/Notification';
import {NavigationContainer} from '@react-navigation/native';
import Icon from '../components/common/Icon';

import {COLORS} from '../assets/themes/Colors';
import SettingScreen from '../screens/primary/SettingScreen';
import AuctionWinners from '../screens/primary/AuctionWinners';

const AuthNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName={Screen.HOMEDRAWER}
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#1a405e',
        drawerActiveTintColor: 'white',
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name={Screen.HOMEDRAWER}
        component={BottomTabNavigator}
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Icon type="ant" name="home" color={color} size={20} />
          ),
        }}
      />
      <Drawer.Screen
        name={Screen.AUCTIONWINNERS}
        component={AuctionWinners}
        options={{
          title: 'Auction Winners',
          drawerIcon: ({focused, color, size}) => (
            <Icon
              type="ionicon"
              name="trophy-outline"
              size={18}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={Screen.SETTINGSCREEN}
        component={SettingScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({focused, color, size}) => (
            <Icon
              type="ionicon"
              name="settings-outline"
              size={18}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>

    // <Drawer.Navigator
    //   initialRouteName={Screen.HOMEDRAWER}
    //   drawerContent={props => <CustomDrawer {...props} />}
    //   screenOptions={{
    //     headerShown: false,
    //     drawerActiveBackgroundColor: 'blue',
    //     drawerActiveTintColor: 'white',
    //     drawerLabelStyle: {
    //       marginLeft: -20,
    //     },
    //   }}>
    //   <Drawer.Screen
    //     name={Screen.HOMEDRAWER}
    //     component={BottomTabNavigator}
    //     options={{
    //       title: 'Home',
    //       // drawerIcon: ({focused, color, size}) => (
    //       //   <Icon name="home-sharp" size={18} color={color} />
    //       // ),
    //     }}
    //   />
    // </Drawer.Navigator>
  );
};
function CustomDrawerContent(props: any) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}>
          <Image
            source={require('../assets/icons/iconProfile.png')}
            style={{height: 50, width: 50, borderRadius: 50}}
          />
          <View
            style={{flex: 1, justifyContent: 'center', paddingHorizontal: 10}}>
            <Text>ID: 2211222</Text>
            <Text style={styles.profileName}>PrajitStha01</Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <DrawerItemList {...props} />
          {/* <DrawerItem
            label={'Logout'}
            icon={({focused, color, size}) => (
              <Icon
                type="ionicon"
                name="exit-outline"
                size={size}
                color={color}
              />
            )}
            onPress={() => {}}
          /> */}
          {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity
          onPress={() => {}}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon type={'ionicon'} name="exit-outline" size={22} />
          <Text style={{paddingLeft: 10}}>Logout</Text>
        </TouchableOpacity>
        {/* <Text>Hello</Text> */}
      </View>
    </View>
  );
}

// const BottomTabNavigator = ({ navigation }) => {
//   return (

//   );
// };

export default AuthNavigator;
const styles = StyleSheet.create({
  profileArea: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profileAreaSecond: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
  },

  profileName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000000',
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 110 / 2,
    // position: 'absolute',
    // left: width / 2 - 110,
    // bottom: -110 / 2,
    // borderWidth: 4,
    // borderColor: 'white',
  },
  drawerListWrapper: {
    // marginTop: 65,
  },
});
