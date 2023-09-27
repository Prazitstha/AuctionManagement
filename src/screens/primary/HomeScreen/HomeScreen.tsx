import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {BackgroundColor, COLORS} from '../../../assets/themes/Colors';
import {homeStyle} from './HomeStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinearGradient} from 'react-native-linear-gradient';
import {CountdownTimer} from '../../../components/common/Timer';
import ProductCard from '../../../components/common/ProductCard';
const HomeScreen = ({navigation}) => {
  return (
    <View style={homeStyle.dashboard}>
      <View style={homeStyle.bannerHeader}>
        <Text style={homeStyle.bannerTitle}>Hello, Prajit</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../../assets/icons/iconProfile.png')}
            style={{height: 40, width: 40, borderRadius: 60}}
          />
        </TouchableOpacity>
      </View>

      <View style={homeStyle.liveAuction}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={homeStyle.banner}>
            <LinearGradient
              // colors={['#f8f8ed', '#ffffff']}
              colors={['#f5f7fa', '#c3cfe2']}
              style={{
                elevation: 3,
                flexDirection: 'row',
                position: 'relative',
              }}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}>
              <View
                style={{
                  width: '50%',
                  justifyContent: 'center',
                  // alignItems: 'center',
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 22,
                    color: COLORS.dark,
                    paddingBottom: 20,
                  }}>
                  Iphone 15 Pro Max
                </Text>
                <CountdownTimer />
              </View>
              <View style={{width: '50%'}}>
                <Image
                  source={require('../../../assets/images/iphone.png')}
                  style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                />
              </View>
            </LinearGradient>
          </View>
          <View style={homeStyle.liveAuctionTitleArea}>
            <Text style={homeStyle.liveAucText}>Live Auction</Text>
            <TouchableOpacity style={homeStyle.liveAucViewall}>
              <Text>View all</Text>
            </TouchableOpacity>
          </View>
          <ProductCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
