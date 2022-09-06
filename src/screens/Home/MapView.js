import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RNMapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import MyCurrentLocationMark from '../../components/molecules/MyCurrentLocationMark';
import { locationSelector } from '../../redux/locationSlice';
import styles from './styles';

const MapView = ({ coords }) => {
  const mapRef = useRef(null);

  const [chooseLocation, setChooseLocation] = useState(null);

  const location = useSelector(locationSelector);

  const initialCamera = {
    altitude: 15000,
    center: {
      latitude: 23.7603,
      longitude: 90.4125,
    },
    heading: 0,
    pitch: 0,
    zoom: 11,
  };

  useEffect(() => {
    if (!!coords && mapRef.current) {
      mapRef.current.animateCamera({
        center: {
          latitude: coords.latitude,
          longitude: coords.longitude,
        },
        pitch: 0,
        heading: 0,
        altitude: 1000,
        zoom: 16,
      });
    }
  }, [coords]);

  useEffect(() => {
    if (location.myCurrentLocation) {
      mapRef.current.animateCamera({
        center: {
          latitude: location.myCurrentLocation.coords.latitude,
          longitude: location.myCurrentLocation.coords.longitude,
        },
        pitch: 0,
        heading: 0,
        altitude: 1000,
        zoom: 18,
      });
    }
  }, [location.myCurrentLocation]);

  const handlePressMap = e => {
    setChooseLocation(e.nativeEvent.coordinate);
  };

  return (
    <View style={styles.container}>
      <RNMapView
        ref={mapRef}
        initialCamera={initialCamera}
        loadingEnabled
        loadingBackgroundColor="white"
        onPress={handlePressMap}
        style={StyleSheet.absoluteFillObject}
        rotateEnabled={false}>
        {!!coords && <MyCurrentLocationMark coords={coords} />}
        {chooseLocation && (
          <>
            <Marker coordinate={chooseLocation} flat identifier="My Mark">
              <View style={styles.dotContainer}>
                <View style={styles.dot2} />
                <View style={styles.arrowDown} />
              </View>
            </Marker>
          </>
        )}
      </RNMapView>
    </View>
  );
};

export default MapView;
