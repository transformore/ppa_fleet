import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';

export default StyleSheet.create({
  text: {
    color: 'black',
    fontSize: defaultValue.fontSize.large,
  },
  touchableOpacity: {
    backgroundColor: colors.backgroundColor.primary,
    alignSelf: 'stretch',
    padding: defaultValue.spacing.small,
    borderRadius: defaultValue.borderRadius.medium,
    borderWidth: 1,
    borderColor: colors.input.transparent,
    paddingHorizontal: defaultValue.spacing.medium,
    height: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: colors.backgroundColor.primary,
    borderRadius: defaultValue.borderRadius.medium,
    elevation: 2,
    paddingHorizontal: defaultValue.spacing.medium,
  },
  option: {
    alignItems: 'flex-start',
    borderBottomWidth: 0.3,
    borderColor: colors.input.transparent,
  },
  textPicker: {
    fontSize: defaultValue.fontSize.ultraLarge,
    padding: defaultValue.spacing.extraSmall,
    width: '100%',
    color: colors.text.black,
  },
});
