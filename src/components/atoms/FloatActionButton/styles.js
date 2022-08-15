import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';

export default StyleSheet.create({
  container: {
    marginLeft: defaultValue.spacing.large,
    position: 'absolute',
    bottom: 20,
    right: 10,
    alignItems: 'flex-end',
    backgroundColor: colors.backgroundColor.primary,
    borderRadius: defaultValue.borderRadius.circle,
    elevation: 1,
    borderWidth: 1,
    borderColor: colors.border.lightGray,
  },
});
