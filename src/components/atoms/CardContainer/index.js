import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';

const CardContainer = ({ children, extendStyle }) => {
  return <View style={[styles.container, extendStyle]}>{children}</View>;
};

export default CardContainer;
