import { StyleSheet } from 'react-native';
import defaultValue from '../../../utils/defaultValue';

export default StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonContainer: {
    borderRadius: defaultValue.borderRadius.medium,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
