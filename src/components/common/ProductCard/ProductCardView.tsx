import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {productStyle} from './ProductCardStyle';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '../../../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import {CountdownTimer} from '../Timer';
const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <View style={productStyle.mainContainer}>
      {/* <LinearGradient
        // colors={['#f8f8ed', '#ffffff']}
        colors={['#ffffff', '#ffffff']}
        style={{
          // elevation: 3,
          flexDirection: 'row',
          paddingTop: 10,
          position: 'relative',
          borderRadius: 10,
          elevation: 2,
        }}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Screen.PRODUCT_DETAIL);
        }}
        style={productStyle.containerViewStyle}>
        <View style={productStyle.containerImageContainer}>
          <Image
            source={require('../../../assets/images/newusdt.png')}
            style={productStyle.image}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 10,
          }}>
          <CountdownTimer />
          {/* <Text style={{fontWeight: '800', fontSize: 18}}>
              11h : 30m : 20s
            </Text> */}
        </View>
        <View style={productStyle.details}>
          <Text style={productStyle.title}>Iphone X Max</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Current Bid: 0</Text>
          <Text>|</Text>
          <Text>Total Bids: 0</Text>
        </View>
        {/* <View style={productStyle.actionView}>
          <Text style={productStyle.priceText}>$25</Text>
          <View style={productStyle.bidButton}>
          <Text style={productStyle.bidBtnText}>Bid now</Text>
          </View>
        </View> */}
      </TouchableOpacity>
      {/* </LinearGradient> */}
    </View>
  );
};

export default ProductCardView;
