import { View } from 'react-native';
import { Circle, Marker } from 'react-native-maps';
import React from 'react';
import styles from './styles';

const MyCurrentLocationMark = ({ coords }) => (
  <>
    <Marker
      anchor={{ x: 0.5, y: 0.6 }}
      coordinate={{
        latitude: coords.latitude,
        longitude: coords.longitude,
      }}
      flat
      style={{
        ...(coords.heading !== -1 && {
          transform: [
            {
              rotate: `${coords.heading}deg`,
            },
          ],
        }),
      }}>
      <View style={styles.dotContainer}>
        <View style={styles.arrow} />
        <View style={styles.dot} />
      </View>
    </Marker>
    <Circle
      center={{
        latitude: coords.latitude,
        longitude: coords.longitude,
      }}
      radius={coords.accuracy}
      strokeColor="rgba(0, 150, 255, 0.5)"
      fillColor="rgba(0, 150, 255, 0.5)"
    />
  </>
);

export default MyCurrentLocationMark;
