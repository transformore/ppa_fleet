import React from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import styles from './styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Progress.Bar indeterminate={true} width={200} />
    </View>
  );
};

export default Loading;
