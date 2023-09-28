import {StyleSheet} from 'react-native';
import {BackgroundColor, COLORS} from '../../../assets/themes/Colors';
export const homeStyle = StyleSheet.create({
  dashboard: {
    backgroundColor: BackgroundColor.backgroundColor,
    flex: 1,
    // paddingHorizontal: 10,
    // paddingVertical: 10,
  },
  banner: {
    // flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingTop: 10,
    height: 200,
    // height: '30%',
  },
  bannerFirst: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    // paddingVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // backgroundColor: 'red',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '800',
    paddingLeft: 10,
  },
  midSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
    // paddingBottom: 10,
  },
  liveAuction: {
    // backgroundColor: 'red',
    // height: '70%',
    flex: 1,
  },
  liveAuctionTitleArea: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  liveAucText: {
    fontWeight: '800',
    fontSize: 20,
  },
  liveAucViewall: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
  },
  requestProductView: {
    height: 100,
    flexDirection: 'row',
    // width: '100%',
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
    // paddingHorizontal: 20,
    borderRadius: 20,
    // overflow: 'hidden',
    // position: 'relative',
  },
  requestView: {
    // backgroundColor: '#1a405e',
    width: 'auto',
  },
  requestProduct: {
    backgroundColor: '#1a405e',
    // height: '100%',
    position: 'absolute',
    paddingVertical: 10,
    borderRadius: 10,
    width: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    top: 30,
    left: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  requestProductText: {
    color: '#ffffff',
    // backgroundColor: 'red',
  },
});
