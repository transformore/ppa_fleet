import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Row = ({ children, alignItems = 'center', extendStyle }) => {
  return <View style={[styles.container(alignItems), extendStyle]}>{children}</View>;
};

export default Row;
