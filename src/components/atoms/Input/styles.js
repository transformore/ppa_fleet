import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';

export default StyleSheet.create({
  input: (editable, height) => ({
    height,
    borderWidth: 1,
    marginTop: defaultValue.spacing.extraSmall,
    borderColor: colors.input.transparent,
    borderRadius: defaultValue.borderRadius.medium,
    paddingHorizontal: defaultValue.spacing.medium,
    fontSize: defaultValue.fontSize.large,
    backgroundColor: editable ? colors.backgroundColor.primary : colors.backgroundColor.tertiary,
    color: editable ? colors.text.stone : colors.text.gray,
  }),
  label: {
    fontWeight: defaultValue.fontWeight.bold,
    fontSize: defaultValue.fontSize.medium,
    letterSpacing: 0.4,
    color: colors.text.black,
    marginBottom: 4,
  },
});
