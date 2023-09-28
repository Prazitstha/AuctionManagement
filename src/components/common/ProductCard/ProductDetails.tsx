import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {productStyle} from './ProductCardStyle';
import Icon from '../Icon';
import {COLORS, SIZES} from '../../../assets/themes/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {homeStyle} from '../../../screens/primary/HomeScreen/HomeStyle';
import {CountdownTimer} from '../Timer';
import moment from 'moment';
import Flag from 'react-native-flags';
const ProductDetails = ({navigation}) => {
  const winnerList = [
    {
      sn: '1',
      email: 'prazitstha22@gmail.com',
      Bidunit: '5',
      country: 'Nepal',
      CountryCode: 'NP',
      created_at: '2023-09-27 00:00:00',
    },
    {
      sn: '2',
      email: 'bijaybohora22@gmail.com',
      Bidunit: '10',
      country: 'India',
      CountryCode: 'IN',
      created_at: '2023-09-27 06:00:00',
    },
    {
      sn: '3',
      email: 'hemraj@gmail.com',
      Bidunit: '15',
      country: 'China',
      CountryCode: 'CN',
      created_at: '2023-09-27 08:00:00',
    },
    {
      sn: '4',
      email: 'vision12@gmail.com',
      Bidunit: '25',
      country: 'Nepal',
      CountryCode: 'NP',
      created_at: '2023-09-27 12:00:00',
    },
    {
      sn: '5',
      email: 'prazitstha22@gmail.com',
      Bidunit: '5',
      country: 'Nepal',
      CountryCode: 'NP',
      created_at: '2023-09-27 18:00:00',
    },
  ];

  const renderItem = ({item}) => (
    <View style={{marginBottom: 10}}>
      <View style={productStyle.currencyInfoContainerStyle}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginRight: 10}}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>{item.sn}</Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontWeight: '600',
                  color: COLORS.dark,
                  paddingRight: 4,
                  marginBottom: 3,
                  fontSize: 14,
                }}>
                {item.email}
              </Text>
              {item.CountryCode && item.CountryCode !== 'XX' ? (
                <Flag code={item.CountryCode} size={16} />
              ) : (
                ''
              )}
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text>{moment(item.created_at).format('lll')} </Text>
              {/* {currentTitle !== 'LUCKYDRAW WINNERS' && <Text> {moment(item.created_at).format('hh:mm A')}</Text>} */}
            </View>
          </View>
        </View>
        <View>
          {item?.Bidunit ? (
            <View style={productStyle.bidUnitView}>
              <Text style={productStyle.bidBtnText}>{item.Bidunit}</Text>
            </View>
          ) : (
            ''
          )}
        </View>
      </View>
    </View>
  );
  return (
    <View style={productStyle.ContainerDetails}>
      <View style={productStyle.upperRowDetails}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            type={'ionicon'}
            name="arrow-back-circle"
            size={28}
            color={COLORS.dark}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={productStyle.banner}>
          <LinearGradient
            colors={['#f5f7fa', '#c3cfe2']}
            style={{
              elevation: 2,
              width: '100%',
            }}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}>
            <Image
              source={require('../../../assets/images/iphone.png')}
              style={productStyle.imageStyle}
            />
          </LinearGradient>
        </View>

        <View style={productStyle.productDetails}>
          <View style={productStyle.detailTitleRow}>
            <Text style={productStyle.detailTitleMain}>Iphone XS MAX</Text>
            {/* <Text style={productStyle.detailTitle}>Starting Bid: $1</Text> */}
          </View>
          <View style={productStyle.detailTitleRow}>
            <Text style={[productStyle.detailTitle, {fontSize: 16}]}>
              Time Left:
            </Text>
            <CountdownTimer />
          </View>
          <View style={productStyle.detailTitleRow}>
            <Text style={productStyle.detailTitle}>Starting Bid:</Text>
            <Text style={productStyle.detailTitle}> $1</Text>
          </View>

          <View style={productStyle.biddingArea}>
            <TextInput
              placeholder="Enter Amount"
              style={productStyle.inputTextStyle}
            />
            <TouchableOpacity
              onPress={() => {}}
              style={productStyle.detailBidButton}>
              <Text style={productStyle.detailBidText}>Bid now</Text>
            </TouchableOpacity>
          </View>
          <View style={productStyle.detailTitleRow}>
            <Text>Bid 3 or more coin</Text>
          </View>
          <View style={productStyle.detailTitleRowList}>
            <Text
              style={[
                productStyle.detailTitle,
                {textAlign: 'center', paddingVertical: 10},
              ]}>
              Latest Biddings
            </Text>
            <View style={productStyle.bidListHeader}>
              <View style={productStyle.bidListHeader1}>
                <Text style={productStyle.bidListHeadText}>Sn.</Text>
              </View>
              <View style={productStyle.bidListHeader2}>
                <Text style={productStyle.bidListHeadText}>Email/Date</Text>
              </View>
              <View style={productStyle.bidListHeader3}>
                <Text style={productStyle.bidListHeadText}>Bid unit</Text>
              </View>
            </View>
            <FlatList
              data={winnerList}
              renderItem={renderItem}
              scrollEnabled={false}
              keyExtractor={(item, index) => index.toString()}
              // refreshControl={
              //   <RefreshControl
              //     refreshing={refreshingThird}
              //     onRefresh={onRefreshThird}
              //   />
              // }
              // onEndReached={endReachedHandlerThird}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
