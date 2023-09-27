import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {SIZES} from '../../../assets/themes/Colors';
import {productStyle} from './ProductCardStyle';
import ProductCardView from './ProductCardView';

const ProductCard = () => {
  const products = [1, 2, 3, 4];

  const renderCardItem = () => {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  };
  return (
    <View style={productStyle.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductCardView />}
        numColumns={2}
        scrollEnabled={false}
        // horizontal
        contentContainerStyle={{alignItems: 'center'}}
      />
    </View>
  );
};

export default ProductCard;
