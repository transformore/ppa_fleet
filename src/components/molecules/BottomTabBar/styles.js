import { StyleSheet, Platform } from 'react-native';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  bottomTabBar: {
    flexDirection: 'row',
    backgroundColor: colors.card.primary,
    paddingTop: defaultValue.spacing.small,
    paddingBottom: Platform.OS === 'ios' ? defaultValue.spacing.ultraLarge : defaultValue.spacing.small,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    position: 'relative',
    marginTop: 1,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: defaultValue.fontSize.small,
    fontWeight: defaultValue.fontWeight.bold,
  },
});
