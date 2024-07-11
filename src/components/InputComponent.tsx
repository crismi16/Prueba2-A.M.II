import React from 'react';
import {TextInput, View} from 'react-native';
import { styles } from '../theme/appTheme';

interface InputProps {
  placeholder: string;
  name: string;
  onChangeText: (name: string, value: string) => void;
}

export const InputComponent = ({
  placeholder,
  name,
  onChangeText,
}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        keyboardType="numeric"
        onChangeText={(value: string) => onChangeText(name, value)}
        style={styles.inputText}
      />
    </View>
  );
};
