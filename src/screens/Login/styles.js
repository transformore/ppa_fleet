import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import defaultValue from '../../utils/defaultValue';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor.primary,
  },
  bg: {
    backgroundColor: colors.backgroundColor.darkOrange,
    borderBottomLeftRadius: defaultValue.borderRadius.extraLarge,
    borderBottomRightRadius: defaultValue.borderRadius.extraLarge,
    borderTopLeftRadius: defaultValue.borderRadius.medium,
    borderTopRightRadius: defaultValue.borderRadius.medium,
    position: 'absolute',
    top: 5,
    height: '50%',
    width: '98%',
    alignItems: 'center',
  },
  logoppa: {
    height: 80,
    width: 80,
    marginBottom: defaultValue.spacing.medium,
  },
  cardContainer: {
    width: '90%',
    alignItems: 'center',
  },
  join: {
    justifyContent: 'space-between',
    width: '100%',
  },
  mapImage: {
    height: 200,
    width: 300,
    marginTop: 100,
  },
});
