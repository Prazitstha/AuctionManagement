import React from 'react';
import {StyleSheet} from 'react-native';
import {SIZES, PERCENT, COLORS} from '../themes/Colors';
export const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',

    alignItems: 'center',
  },
  containerTitle: {
    padding: 20,
  },
  containerTitleText: {
    fontSize: SIZES.large,
  },
  loginBox: {
    width: '100%',
    paddingHorizontal: PERCENT.three,
  },
  inputBox: {
    // borderColor: 'grey',
    width: '100%',

    marginBottom: 10,
    padding: 0,
    paddingHorizontal: PERCENT.three,
    backgroundColor: '#F1F4FF',
    borderRadius: 5,
    // fontSize: 20,
    opacity: 80,
  },
  normalBox: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  loginInput: {
    width: '100%',
    // backgroundColor: 'red',
  },
});

export const ButtonStyle = StyleSheet.create({
  primary: {
    backgroundColor: COLORS.buttonColor,
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: SIZES.large,
  },
});
