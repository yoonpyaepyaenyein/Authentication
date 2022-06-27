import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ConfirmEmailScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
