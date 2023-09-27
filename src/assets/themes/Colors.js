import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
const isDarkMode = useColorScheme() === 'dark';
export const BackgroundColor = {
  backgroundColor: isDarkMode ? '#000000' : '#FAFBFB',
};

export const COLORS = {
  //main colors
  primary: '#1a405e',
  buttonColor: '#1F41BB',
  primary_dark: '#111827',
  secondary: '#236294',
  lightBlue: '#E5F3FF',
  // lightBlue: '#F0F8FF',
  yellow: '#E4A300',
  white: '#ffffff',
  dark: '#212529',
  //gray colors.
  gray: '#8E8E8E',
  light_gray: '#F4F4F4',
  light_gray_highlight: '#E8E8E8',
  light_gray_dark: '#E0E0E0',
  danger: '#dc3545',

  success: '#198855',
  success_light: '#DCFFEF',
  warning: '#e1bf36',
  orange: '#f5d68e',
  cancel: '#e87b85',
  cancel_light: '#FFD5D9',

  //social media colors
  facebookColor: '#4267b2',
  twitterColor: '#00aaee',

  instagramColor: '#e1306c',
  linkedinColor: '#0077b5',
  teligramColor: '#0088cc',
  weiboColor: '#df2029',
};

export const background = {
  primary: COLORS.primary,
  primary_dark: COLORS.primary_dark,
  light_gray: COLORS.light_gray,
  gray: COLORS.gray,
};

export const SOCIAL = {
  facebookColor: COLORS.facebookColor,
  twitterColor: COLORS.twitterColor,
  instagramColor: COLORS.instagramColor,
  linkedinColor: COLORS.linkedinColor,
  teligramColor: COLORS.teligramColor,
  weiboColor: COLORS.weiboColor,
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
  XLarge: 26,
  XXLarge: 30,
};

export const SHADOWS = {
  primary: {
    shadowColor: COLORS.primary_dark,
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },

  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};

export const PERCENT = {
  zero_point_five: '0.5%',
  one: '1%',
  one_point_five: '1.5%',
  one_point_eight: '1.8%',
  two: '2%',
  two_point_five: '2.5%',
  two_point_eight: '1.8%',
  three: '3%',
  three_point_five: '3.5%',
  six: '6%',
  thirty: '30%',
  fourty: '40%',
  fourtyFive: '45%',
  six_point_five: '6.5%',
  nine: '9%',
  ten: '10%',
  fifty: '50%',
  sixty: '60%',
  seventy: '70%',
  eighty: '80%',
  ninty: '90%',
  ninty_five: '95%',
  hundred: '100%',
};
