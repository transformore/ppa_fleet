import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor.primary,
    borderRadius: defaultValue.borderRadius.medium,
    padding: defaultValue.spacing.medium,
    elevation: 1,
  },
});
