import {StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../assets/themes/Colors';
export const productStyle = StyleSheet.create({
  mainContainer: {
    paddingBottom: 5,
    paddingRight: 5,
    backgroundColor: 'transparent',
    // backgroundColor: 'grey',
  },
  container: {
    marginTop: 10,
    marginLeft: 12,
  },
  containerViewStyle: {
    width: 182,
    height: 240,
    marginEnd: 2,
    borderRadius: SIZES.medium,
    backgroundColor: '#ffffff',
    elevation: 2,
    // backgroundColor: 'red',
  },
  containerImageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden',
    backgroundColor: 'grey',
  },
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  actionView: {
    padding: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {},
  bidButton: {
    backgroundColor: '#1a405e',
    padding: SIZES.small / 2,
    borderRadius: 7,
  },
  bidBtnText: {
    color: '#ffffff',
  },

  ContainerDetails: {
    flex: 1,
  },
  upperRowDetails: {
    marginHorizontal: 15,
    position: 'absolute',
    top: 10,
    zIndex: 999,
  },
  imageStyle: {
    aspectRatio: 1,
    // height: 400,
    resizeMode: 'contain',
  },
  banner: {
    // flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingTop: 10,
    height: 300,
    overflow: 'hidden',
    // backgroundColor: 'red',
    // height: '30%',
  },
  productDetails: {
    flex: 1,
    marginTop: -10,
    paddingTop: 20,
    borderTopRightRadius: SIZES.medium,
    borderTopLeftRadius: SIZES.medium,
    backgroundColor: '#FFFFFF',
  },
  detailTitleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // top: 20,
  },
  detailTitleRowList: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  detailCountdownArea: {
    backgroundColor: 'red',
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  detailTitleMain: {
    fontSize: SIZES.large,
    color: COLORS.dark,
    fontWeight: '800',
  },
  detailTitle: {
    fontSize: SIZES.medium,

    fontWeight: '600',
  },
  biddingArea: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // top: 20,
  },
  detailBidButton: {
    backgroundColor: '#1a405e',
    paddingHorizontal: 30,
    paddingVertical: 10,
    // padding: SIZES.small / 2,
    borderRadius: 7,
  },
  detailBidText: {
    color: '#ffffff',
    fontSize: 18,
  },
  inputTextStyle: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    width: '60%',
  },

  currencyInfoContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    // elevation: 3,
    height: 60,
    // elevation: 2.0,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
