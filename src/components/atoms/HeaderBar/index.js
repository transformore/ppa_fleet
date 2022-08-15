import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import styles from './styles';
import { NavigationContext } from '@react-navigation/native';
import Spacer from '../Spacer';
import { ArrowBackIcon } from '../../../assets/icons';

const HeaderBar = ({ title, onPress }) => {
  const navigation = useContext(NavigationContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress ? onPress : () => navigation.goBack()}>
        <ArrowBackIcon width={35} height={35} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Spacer height={35} width={35} />
    </View>
  );
};

export default HeaderBar;
