import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RNMapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import MyCurrentLocationMark from '../../components/molecules/MyCurrentLocationMark';
import { locationSelector } from '../../redux/locationSlice';
import MapViewDirections from 'react-native-maps-directions';
import styles from './styles';
import { env } from '../../../env';
import socket from '../../../socket';
import TransportationLocationMark from '../../components/molecules/TransportationLocationMark';

const MapView = ({ coords }) => {
  const mapRef = useRef(null);

  const [chooseLocation, setChooseLocation] = useState(null);
  const [userLocation, setUserLocation] = useState([]);

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

  const handleOpenModalSaveLocation = () => {};

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

  useEffect(() => {
    socket.transportations.emit('transportation:locations');
    socket.transportations.on('transportation:locations', payload => {
      setUserLocation(payload);
    });

    return () => {
      socket.transportations.off('transportation:locations');
    };
  }, []);

  console.log(userLocation[0]);

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
            <Marker
              coordinate={chooseLocation}
              flat
              title="Pilih Lokasi"
              onPress={handleOpenModalSaveLocation}>
              <View style={styles.dotContainer}>
                <View style={styles.dot2} />
                <View style={styles.arrowDown} />
              </View>
            </Marker>
          </>
        )}
        {userLocation.length !== 0 &&
          userLocation.map(item => {
            return (
              <TransportationLocationMark
                key={item.id}
                name={item.name}
                latitude={item.location.latitude}
                longitude={item.location.longitude}
              />
            );
          })}

        <MapViewDirections
          origin={coords}
          destination={chooseLocation}
          apikey={env.GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
        />
      </RNMapView>
    </View>
  );
};

export default MapView;
