import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';

//COMPONENT
import {styles} from './style';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const onConfirmPressed = () => {
    console.warn('onConfirmPressed ');
  };

  const onSignInPress = () => {
    console.warn('onSignInPress');
  };

  const onResendPress = () => {
    console.warn('onResendPress');
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>
        <CustomInput
          placeholder="Enter Your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend Code"
          onPress={onResendPress}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
