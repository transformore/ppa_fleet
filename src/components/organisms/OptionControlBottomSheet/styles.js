import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';

export default StyleSheet.create({
  optionControlContainer: {
    paddingHorizontal: defaultValue.spacing.extraLarge,
    paddingVertical: defaultValue.spacing.medium,
  },
  optionControl: {
    flex: 1,
  },
  currentLocationImage: {
    height: 40,
    width: 40,
  },
  containerBottomSheet: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    bottom: 0,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});
