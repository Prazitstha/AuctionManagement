import {StyleSheet} from 'react-native';
import {BackgroundColor, COLORS} from '../../../assets/themes/Colors';
export const homeStyle = StyleSheet.create({
  dashboard: {
    backgroundColor: BackgroundColor.backgroundColor,
    flex: 1,
    // paddingHorizontal: 10,
    paddingVertical: 10,
  },
  banner: {
    // flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    height: 200,
    // height: '30%',
  },
  bannerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical: 10,
    paddingHorizontal: 10,
    // backgroundColor: 'red',
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '800',
  },
  liveAuction: {
    // backgroundColor: 'red',
    // height: '70%',
    flex: 1,
  },
  liveAuctionTitleArea: {
    paddingHorizontal: 10,
    paddingTop: 20,
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
});
