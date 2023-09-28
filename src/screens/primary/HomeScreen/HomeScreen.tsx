import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {BackgroundColor, COLORS} from '../../../assets/themes/Colors';
import {homeStyle} from './HomeStyle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LinearGradient} from 'react-native-linear-gradient';
import {CountdownTimer} from '../../../components/common/Timer';
import ProductCard from '../../../components/common/ProductCard';
import Icon from '../../../components/common/Icon';
const HomeScreen = ({navigation}) => {
  return (
    <View style={homeStyle.dashboard}>
      <View style={homeStyle.bannerHeader}>
        <View style={homeStyle.bannerFirst}>
          <Image
            source={require('../../../assets/icons/iconProfile.png')}
            style={{height: 40, width: 40, borderRadius: 60}}
          />

          <Text style={homeStyle.bannerTitle}>Hello, Prajit</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon type={'ionicon'} name={'menu'} color="grey" size={30} />
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
                  source={require('../../../assets/images/newusdt.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'contain',
                    // borderColor: '#CCC',
                    // borderWidth: 1,
                  }}
                />
              </View>
            </LinearGradient>
          </View>
          <View style={homeStyle.midSection}>
            <View>
              <Text style={{fontSize: 24, fontWeight: '600'}}>0.00</Text>
              <Text>Balance</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Icon
                type={'ionicon'}
                name="wallet-outline"
                size={35}
                color="grey"
              />
              <Text>Purchase</Text>
            </View>
          </View>
          {/* <View style={homeStyle.requestProductView}>
            <View
              style={{
                backgroundColor: '#1a405e',
                width: '48%',
                borderRadius: 5,
                paddingVertical: 12,
              }}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={{color: '#ffffff', textAlign: 'center'}}>
                  Something
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#1a405e',
                width: '48%',
                borderRadius: 5,
                paddingVertical: 12,
              }}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={{color: '#ffffff', textAlign: 'center'}}>
                  Request Products
                </Text>
              </TouchableOpacity>
            </View>
          </View> */}
          {/* <View style={homeStyle.requestProductView}>
            <ImageBackground
              source={require('../../../assets/images/bannerImage2.png')}
              style={{
                height: '100%',
                // width: '100%',
                // resizeMode: 'cover',
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <Text>Want to Request Products for Auction ?</Text>
              <TouchableOpacity
                onPress={() => {}}
                style={homeStyle.requestProduct}>
                <Text style={homeStyle.requestProductText}>Request</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View> */}
          <View style={homeStyle.liveAuctionTitleArea}>
            <Text style={homeStyle.liveAucText}>Live Auction</Text>
            <TouchableOpacity style={homeStyle.liveAucViewall}>
              <Text>View all</Text>
            </TouchableOpacity>
          </View>
          <ProductCard />
          {/* <View style={homeStyle.requestProductView}>
            <ImageBackground
              source={require('../../../assets/images/bannerImage2.png')}
              style={{
                height: '100%',
                width: '100%',
                // resizeMode: 'cover',
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <Text>Want to Request Products for Auction ?</Text>
              <TouchableOpacity
                onPress={() => {}}
                style={homeStyle.requestProduct}>
                <Text style={homeStyle.requestProductText}>Request</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View> */}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
