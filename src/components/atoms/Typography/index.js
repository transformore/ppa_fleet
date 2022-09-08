import React from 'react';
import { Text } from 'react-native';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';

const textColor = color => {
  switch (color) {
    case 'primary':
      return {
        color: colors.text.stone,
      };
    case 'white':
      return {
        color: colors.text.white,
      };
    default:
      return {
        color: colors.text.stone,
      };
  }
};

const fontSizeText = size => {
  switch (size) {
    case 'small':
      return {
        fontSize: defaultValue.fontSize.small,
      };
    case 'medium':
      return {
        fontSize: defaultValue.fontSize.medium,
      };
    case 'large':
      return {
        fontSize: defaultValue.fontSize.large,
      };
    case 'extra-large':
      return {
        fontSize: defaultValue.fontSize.extraLarge,
      };
    case 'ultra-large':
      return {
        fontSize: defaultValue.fontSize.ultraLarge,
      };
    default:
      return {
        fontSize: defaultValue.fontSize.medium,
      };
  }
};

const fontWeight = weight => {
  switch (weight) {
    case 'light':
      return {
        fontWeight: defaultValue.fontWeight.light,
      };
    case 'reguler':
      return {
        fontWeight: defaultValue.fontWeight.regular,
      };
    case 'medium':
      return {
        fontWeight: defaultValue.fontWeight.medium,
      };
    case 'light-bold':
      return {
        fontWeight: defaultValue.fontWeight.lightBold,
      };
    case 'bold':
      return {
        fontWeight: defaultValue.fontWeight.bold,
      };
    case 'extra-bold':
      return {
        fontWeight: defaultValue.fontWeight.extraBold,
      };
    default:
      return {
        fontWeight: defaultValue.fontWeight.regular,
      };
  }
};

const Typhography = ({
  text,
  color = 'primary',
  fontSize = 'medium',
  variant = 'reguler',
  align = 'auto',
  extendStyle,
}) => {
  return (
    <Text
      style={[
        extendStyle,
        textColor(color),
        fontSizeText(fontSize),
        fontWeight(variant),
        { textAlign: align },
      ]}>
      {text}
    </Text>
  );
};

export default Typhography;
