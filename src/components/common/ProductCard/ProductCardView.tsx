import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {productStyle} from './ProductCardStyle';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '../../../utils/constants';
const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <View style={productStyle.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Screen.PRODUCT_DETAIL);
        }}
        style={productStyle.containerViewStyle}>
        <View style={productStyle.containerImageContainer}>
          <Image
            source={require('../../../assets/images/iphone.png')}
            style={productStyle.image}
          />
        </View>
        <View style={productStyle.details}>
          <Text style={productStyle.title}>Iphone X Max</Text>
          <Text>11h : 30m : 20s</Text>
        </View>
        <View style={productStyle.actionView}>
          <Text style={productStyle.priceText}>$25</Text>
          <View style={productStyle.bidButton}>
            <Text style={productStyle.bidBtnText}>Bid now</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCardView;
