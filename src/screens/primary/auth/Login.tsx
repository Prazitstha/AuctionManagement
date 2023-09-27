import {View, Text, TextInput} from 'react-native';
import React, {useRef, useEffect, useMemo, useState} from 'react';
import {Formik, FormikProps} from 'formik';
import {LoginStyle} from '../../../assets/styles/ExternalStyles';
import {NewButton} from '../../../components/common/CustomButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  useFocusEffect,
  CommonActions,
  useNavigation,
} from '@react-navigation/native';
import {Screen} from '../../../utils/constants';
const Login = () => {
  interface LoginCredential {
    email: string;
    password: string;
  }
  const initialLoginCredential = useMemo(() => {
    return {
      email: '',
      password: '',
    };
  }, []);
  const navigation = useNavigation();
  const togglePasswordVisibility = () => {
    setPasswordToggle(!passwordToggle);
  };
  const handleLogin = values => {
    console.log('ValuesHere', values);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: Screen.AUTHNAVIGATOR}],
      }),
    );
  };
  const formikRef = useRef<FormikProps<LoginCredential>>(null);
  const [passwordToggle, setPasswordToggle] = useState(true);
  return (
    <View style={LoginStyle.container}>
      <View style={LoginStyle.containerTitle}>
        <Text style={LoginStyle.containerTitleText}>Welcome Back</Text>
      </View>
      <Formik
        innerRef={formikRef}
        initialValues={initialLoginCredential}
        validateOnMount={true}
        onSubmit={(values, {resetForm}) => {
          handleLogin(values);
        }}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <View style={LoginStyle.loginBox}>
            <View style={LoginStyle.inputBox}>
              <TextInput
                style={LoginStyle.loginInput}
                autoCapitalize="none"
                keyboardType="email-address"
                autoFocus={false}
                returnKeyType="next"
                placeholder={'Email address'}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
            </View>

            <View style={LoginStyle.inputBox}>
              <TextInput
                style={LoginStyle.loginInput}
                autoCapitalize="none"
                autoFocus={false}
                returnKeyType="next"
                placeholder={'Password'}
                secureTextEntry={passwordToggle}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  right: 15,
                  top: 0,
                  height: '100%',
                }}>
                {/* <TouchableOpacity style={{}} onPress={togglePasswordVisibility}>
                  {passwordToggle ? (
                    <EyeIcon
                      name="eye-off"
                      size={(12 * height) / width}
                      color={themeColor.eye}
                    />
                  ) : (
                    <EyeIcon
                      name="eye"
                      size={(12 * height) / width}
                      color={themeColor.eye}
                    />
                  )}
                </TouchableOpacity> */}
              </View>
            </View>
            <View style={LoginStyle.normalBox}>
              <NewButton
                networkCallStatus={false}
                isValid={true}
                issValid={false}
                label={'Sign in'}
                onPress={handleSubmit}
              />
            </View>
            <View style={LoginStyle.normalBox}>
              <TouchableOpacity>
                <Text>Create an Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
