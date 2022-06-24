import {View, Text, Image, useWindowDimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';

//COMPONENT
import Logo from '../../../assets/images/Logo_1.png';
import {styles} from './style';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Sign in');
  };

  const onForgotPassword = () => {
    console.warn('OnForgotPassword');
  };

  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  const onSignUpPress = () => {
    console.warn('onSignUpPress');
  };
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 30}]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton text="Sign In " onPress={onSignInPressed} />

        <CustomButton
          text="Forgot Password"
          onPress={onForgotPassword}
          type="TERTIARY"
        />

        <CustomButton
          text="Sign In With Facebook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          FgColor="#4765A9"
        />
        <CustomButton
          text="Sign In With Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          FgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In With Apple"
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          FgColor="#363636"
        />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
