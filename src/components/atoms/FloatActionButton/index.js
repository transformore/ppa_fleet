import React from 'react';
import { TouchableOpacity } from 'react-native';
import colors from '../../../utils/colors';
import styles from './styles';

const FloatActionButton = ({ onPress, Icon, color = colors.text.stone }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon height={50} width={50} color={color} />
    </TouchableOpacity>
  );
};

export default FloatActionButton;
