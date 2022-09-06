import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';

export default StyleSheet.create({
  dotContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: 'rgb(0, 120, 255)',
    width: 24,
    height: 24,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    elevation: 4,
  },
  dot2: {
    backgroundColor: colors.backgroundColor.red,
    width: 24,
    height: 24,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    elevation: 4,
  },
  homeIcon: {
    colors: colors.text.red,
    height: 200,
    width: 200,
  },
  arrow: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgb(0, 120, 255)',
  },
  arrowDown: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: colors.backgroundColor.red,
  },
  optionControlContainer: {
    paddingHorizontal: defaultValue.spacing.extraLarge,
    paddingVertical: defaultValue.spacing.medium,
  },
  optionControl: {
    flex: 1,
    borderTopWidth: 1,
    backgroundColor: colors.backgroundColor.primary,
  },
  currentLocationImage: {
    alignSelf: 'flex-end',
    height: 40,
    width: 40,
  },
});
