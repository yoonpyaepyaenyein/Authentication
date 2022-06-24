import {View, Text, Pressable} from 'react-native';
import React from 'react';

//COMPONENT
import {styles} from './style';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, FgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          FgColor ? {color: FgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
