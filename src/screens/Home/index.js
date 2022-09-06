import React, { useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Toast from 'react-native-toast-message';
import ScreenContainer from '../../components/atoms/ScreenContainer';
import OptionControlBottomSheet from '../../components/organisms/OptionControlBottomSheet';
import MapView from './MapView';

const HomeScreen = () => {
  const [location, setLocation] = useState(null);

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

  useEffect(() => {
    hasLocationPermission().then(bool => {
      if (bool) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation(position);
          },
          error => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      }
    });
  }, []);

  return (
    <ScreenContainer scrollable={false} paddingHorizontal={0}>
      <MapView coords={location?.coords} />
      <OptionControlBottomSheet />
    </ScreenContainer>
  );
};

export default HomeScreen;
