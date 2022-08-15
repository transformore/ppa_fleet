import { StyleSheet } from 'react-native';
import colors from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: colors.backgroundColor.transparent,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
