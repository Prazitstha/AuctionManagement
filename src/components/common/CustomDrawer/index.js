// import React from 'react';
// import {
//   ImageBackground,
//   StyleSheet,
//   Image,
//   View,
//   Dimensions,
//   Text,
// } from 'react-native';
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
// } from '@react-navigation/drawer';

// import {COLORS} from '../../../assets/themes/Colors';
// import {IMGS} from '../../../utils/imgs';

// // const {width} = Dimensions.get('screen');

// const CustomDrawer = props => {
//   return (
//     <DrawerContentScrollView {...props}>
//       {/* <View style={styles.profileArea}>
//         <Image source={IMGS.userProfile} style={styles.userImg} />
//         <View style={styles.profileAreaSecond}>
//           <Text style={styles.profileId}>ID: 2211222</Text>
//           <Text style={styles.profileName}>PrajitStha01</Text>
//         </View>
//       </View>
//       <View style={styles.drawerListWrapper}> */}
//       <DrawerItemList {...props} />
//       {/* </View> */}
//     </DrawerContentScrollView>
//   );
// };

// export default CustomDrawer;

// const styles = StyleSheet.create({
//   profileArea: {
//     flexDirection: 'row',
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//   },
//   profileAreaSecond: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     paddingLeft: 10,
//   },

//   profileName: {
//     fontSize: 20,
//     fontWeight: '800',
//     color: COLORS.dark,
//   },
//   userImg: {
//     width: 50,
//     height: 50,
//     borderRadius: 110 / 2,
//     // position: 'absolute',
//     // left: width / 2 - 110,
//     // bottom: -110 / 2,
//     // borderWidth: 4,
//     // borderColor: 'white',
//   },
//   drawerListWrapper: {
//     // marginTop: 65,
//   },
// });
