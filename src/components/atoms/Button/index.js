import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';
import styles from './styles';

function typeButton(type) {
  switch (type) {
    case 'primary':
      return {
        backgroundColor: colors.button.primary,
        color: colors.text.white,
        padding: defaultValue.spacing.small,
      };
    case 'secondary':
      return {
        backgroundColor: colors.button.secondary,
        color: colors.text.white,
        padding: defaultValue.spacing.small,
      };
    case 'tertiary':
      return {
        backgroundColor: colors.button.tertiary,
        color: colors.text.white,
        padding: defaultValue.spacing.small,
      };
    case 'danger':
      return {
        backgroundColor: colors.button.red,
        color: colors.text.white,
        padding: defaultValue.spacing.small,
      };
    case 'pagination':
      return {
        backgroundColor: colors.button.indigo,
        color: colors.text.white,
        padding: defaultValue.spacing.small,
      };
    case 'disabled':
      return {
        backgroundColor: colors.button.disabled,
        color: colors.text.white,
        padding: defaultValue.spacing.small,
      };
    case 'outline':
      return {
        backgroundColor: colors.button.transparent,
        color: colors.text.primary,
        borderWidth: 1,
        borderColor: colors.text.primary,
        padding: defaultValue.spacing.small,
      };
    case 'outline-danger':
      return {
        backgroundColor: colors.button.transparent,
        color: colors.text.red,
        borderWidth: 1,
        borderColor: colors.text.red,
        padding: defaultValue.spacing.small,
      };
    case 'transparent-primary':
      return {
        backgroundColor: colors.button.transparent,
        color: colors.text.primary,
      };
    case 'transparent-gray':
      return {
        backgroundColor: colors.button.transparent,
        color: colors.text.gray,
      };
    case 'underline-primary':
      return {
        backgroundColor: colors.button.transparent,
        color: colors.text.primary,
        borderBottomWidth: 2,
        borderBottomColor: colors.text.primary,
        paddingBottom: defaultValue.spacing.small,
      };
    case 'underline-gray':
      return {
        backgroundColor: colors.button.transparent,
        color: colors.text.primary,
        borderBottomWidth: 2,
        borderBottomColor: colors.text.gray,
        paddingBottom: defaultValue.spacing.small,
      };
    default:
      return {
        backgroundColor: colors.button.primary,
        color: colors.text.white,
        padding: defaultValue.spacing.small,
      };
  }
}

function fontSizeButton(size) {
  switch (size) {
    case 'small':
      return {
        fontSize: defaultValue.fontSize.medium,
        fontWeight: defaultValue.fontWeight.lightBold,
      };
    case 'medium':
      return {
        fontSize: defaultValue.fontSize.large,
        fontWeight: defaultValue.fontWeight.bold,
      };
    case 'large':
      return {
        fontSize: defaultValue.fontSize.extraLarge,
        fontWeight: defaultValue.fontWeight.bold,
      };
    default:
      return {
        fontSize: defaultValue.fontSize.large,
        fontWeight: defaultValue.fontWeight.bold,
      };
  }
}

const Button = ({ onPress, title, width = '100%', height = 40, type, fontSize = 'medium' }) => {
  const { color, ...typeBtn } = typeButton(type);
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, typeBtn, { width, height }]}
      onPress={onPress}
      disabled={type === 'disabled'}>
      <Text style={[styles.buttonText, fontSizeButton(fontSize), { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
