import React from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import { useDispatch, useSelector } from 'react-redux';
import { loadingActions } from '../../../redux/loading';
import styles from './styles';

const GlobalLoading = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.loading.isLoading);

  if (isLoading) {
    setTimeout(() => {
      dispatch(loadingActions.setIsLoading(false));
    }, 10000);

    return (
      <View style={styles.container}>
        <Progress.Bar indeterminate={true} width={200} />
      </View>
    );
  }
  return null;
};

export default GlobalLoading;
