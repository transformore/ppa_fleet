import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const InputLabel = ({ label }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default InputLabel;
