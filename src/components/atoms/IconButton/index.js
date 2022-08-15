import React from 'react';
import { TouchableOpacity } from 'react-native';
import colors from '../../../utils/colors';
import styles from './styles';

const IconButton = ({ Icon, color = colors.text.darkBlue, onPress, onLongPress, style = styles.container }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress} onLongPress={onLongPress}>
      <Icon style={[styles.icon, { color }]} />
    </TouchableOpacity>
  );
};

export default IconButton;
