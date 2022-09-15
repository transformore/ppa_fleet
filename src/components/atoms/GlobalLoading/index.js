import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadingActions } from '../../../redux/loadingSlice';
import colors from '../../../utils/colors';
import Typhography from '../Typography';
import styles from './styles';

const GlobalLoading = () => {
  const dispatch = useDispatch();

  const loadingSelector = useSelector(state => state.loading);

  if (loadingSelector.isLoading) {
    setTimeout(() => {
      dispatch(
        loadingActions.setLoading({
          isLoading: false,
          text: '',
        }),
      );
    }, 10000);

    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.text.white} />
        <Typhography
          text={loadingSelector.text}
          variant="bold"
          fontSize="extra-large"
          color="white"
        />
      </View>
    );
  }

  return null;
};

export default GlobalLoading;
