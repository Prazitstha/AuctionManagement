import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet} from 'react-native';
// import { useDispatch } from 'react-redux';
// import { UserSagaAction } from '../../../services/saga/saga-action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Title} from 'react-native-paper';
import {useCountdown} from '../../../hooks/useCountDown';
import {COLORS} from '../../../assets/themes/Colors';
const ShowCounter = ({hours, minutes, seconds}: any) => {
  //   const dispatch = useDispatch();
  // if (hours + minutes + seconds <= 0) {
  //   dispatch({
  //     type: UserSagaAction.GET_PROFILE,
  //     payload: {},
  //   });
  // }
  //   React.useEffect(() => {
  //     if (hours + minutes + seconds <= 0) {
  //       dispatch({
  //         type: UserSagaAction.GET_PROFILE,
  //         payload: {},
  //       });
  //     }
  //   }, [hours, minutes, seconds, dispatch]);
  return (
    <View style={styles.textContainer}>
      <View style={styles.textBox}>
        <Text style={styles.text}>{hours ? hours : '00'}</Text>
        <Text style={styles.textSecondary}>hrs</Text>
      </View>
      {/* <View style={styles.centerBox}>
        <Text style={styles.centerText}>:</Text>
      </View> */}
      <View style={styles.textBox}>
        <Text style={styles.text}>{minutes ? minutes : '00'}</Text>
        <Text style={styles.textSecondary}>min</Text>
      </View>
      {/* <View style={styles.centerBox}>
        <Text style={styles.centerText}>:</Text>
      </View> */}
      <View style={styles.textBox}>
        <Text style={styles.text}>{seconds ? seconds : '00'}</Text>
        <Text style={styles.textSecondary}>sec</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    // position: 'absolute',
    // right: 40,
    // bottom: 30,

    // paddingHorizontal: 5,
    borderRadius: 5,
  },
  centerText: {
    color: '#4d4d4d',
    fontWeight: 'bold',
  },
  centerBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#1a405e',
    fontWeight: 'bold',
  },
  textSecondary: {
    color: 'grey',
    // backgroundColor: 'red',
    padding: 0,
    margin: 0,
    lineHeight: 15,
  },
  textBox: {
    // marginRight: 10,
    marginHorizontal: 4,
    backgroundColor: 'transparent',
    borderWidth: 1,
    // borderColor: 'gold',
    borderColor: '#1a405e',
    height: 40,
    width: 50,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    borderRadius: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
const CountdownTimer = (): React.ReactElement | null => {
  // const {
  //   bidCheck: [bidCheck, dispatchBidCheck],
  // } = useAppContext();
  // toggleBidCheck('bidCheck', dispatchBidCheck);

  // targetDate = '2023-02-09 11:13:00';
  const remainingTime = useCountdown();
  if (remainingTime) {
    return (
      <ShowCounter
        hours={remainingTime.hours}
        minutes={remainingTime.minutes}
        seconds={remainingTime.seconds}
      />
    );
  }
  return null;
};

export {CountdownTimer};
