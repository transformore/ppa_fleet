import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';

export default StyleSheet.create({
  container: {
    borderRadius: defaultValue.borderRadius.circle,
    backgroundColor: colors.backgroundColor.primary,
    padding: defaultValue.spacing.extraSmall,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
