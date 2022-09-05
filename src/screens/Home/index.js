import React, { useCallback, useRef, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Toast from 'react-native-toast-message';
import ScreenContainer from '../../components/atoms/ScreenContainer';

const HomeScreen = () => {
  const [forceLocation, setForceLocation] = useState(true);
  const [highAccuracy, setHighAccuracy] = useState(true);
  const [locationDialog, setLocationDialog] = useState(true);
  const [significantChanges, setSignificantChanges] = useState(false);
  const [observing, setObserving] = useState(false);
  const [useLocationManager, setUseLocationManager] = useState(false);
  const [location, setLocation] = useState(null);

  const watchId = useRef(null);

  const hasLocationPermission = async () => {
    const hasPermission = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    if (hasPermission) {
      return true;
    }

    const status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    if (status === RESULTS.GRANTED) {
      return true;
    }

    if (status === RESULTS.DENIED) {
      Toast.show({
        type: 'error',
        text1: 'Location permission denied',
      });
    } else if (status === RESULTS.NEVER_ASK_AGAIN) {
      Toast.show({
        type: 'error',
        text1: 'Location permission revoked',
      });
    }

    return false;
  };

  const getLocationUpdates = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    setObserving(true);

    watchId.current = Geolocation.watchPosition(
      position => {
        setLocation(position);
        console.log(position);
      },
      error => {
        setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: highAccuracy,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
        forceRequestLocation: forceLocation,
        forceLocationManager: useLocationManager,
        showLocationDialog: locationDialog,
        useSignificantChanges: significantChanges,
      },
    );
  };

  const removeLocationUpdates = useCallback(() => {
    if (watchId.current !== null) {
      Geolocation.clearWatch(watchId.current);
      watchId.current = null;
      setObserving(false);
    }
  }, []);

  return (
    <ScreenContainer>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          width: '100%',
          height: 400,
        }}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
