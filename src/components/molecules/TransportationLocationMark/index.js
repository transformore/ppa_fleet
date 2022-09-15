import React from 'react';
import { View } from 'react-native';
import { Marker } from 'react-native-maps';
import Typhography from '../../atoms/Typography';
import styles from './styles';

const TransportationLocationMark = ({ latitude, longitude, name }) => {
  return (
    <Marker
      anchor={{ x: 0.5, y: 0.6 }}
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
      flat
      title={name}>
      <View style={styles.dotContainer}>
        <View style={styles.dot} />
      </View>
    </Marker>
  );
};

export default React.memo(TransportationLocationMark);
