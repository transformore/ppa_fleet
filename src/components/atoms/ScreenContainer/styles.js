import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';
import defaultValue from '../../../utils/defaultValue';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor.tertiary,
  },
  nonScrollableContainer: ({ paddingHorizontal }) => ({
    flex: 1,
    paddingHorizontal,
    position: 'relative',
  }),
  wrapper: {
    flex: 1,
  },
  scrollabeContainer: ({ paddingHorizontal }) => ({
    paddingHorizontal,
    position: 'relative',
  }),
  headerBarContainer: {
    paddingHorizontal: defaultValue.spacing.extraLarge,
    paddingBottom: defaultValue.spacing.extraLarge,
  },
});
