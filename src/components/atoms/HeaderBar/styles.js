import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: defaultValue.fontSize.extraLarge,
    color: colors.text.stone,
    fontWeight: defaultValue.fontWeight.bold,
    textTransform: 'capitalize',
  },
  icon: {
    color: colors.text.stone,
  },
});
