import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {COLORS} from '../../../assets/themes/Colors';
import {ButtonStyle} from '../../../assets/styles/ExternalStyles';
export const NewButton = ({
  networkCallStatus,
  onPress,
  isValid,
  issValid,
  label,
  ...props
}) => {
  return (
    <>
      {networkCallStatus ? (
        <TouchableOpacity
          style={[
            ButtonStyle.primary,
            {flexDirection: 'row', justifyContent: 'center'},
          ]}
          disabled={true}>
          <ActivityIndicator
            size="small"
            color="#ffffff"
            style={{paddingHorizontal: 4}}
          />
          <Text style={[ButtonStyle.text, {color: 'grey'}]}>
            {'Please wait'}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            ButtonStyle.primary,
            {
              width: '100%',
              backgroundColor: props.disabled
                ? COLORS.gray
                : COLORS.buttonColor,
            },
          ]}
          disabled={!isValid || issValid}
          onPress={onPress}>
          <Text style={ButtonStyle.text}>{label}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};
