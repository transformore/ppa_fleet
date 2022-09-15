import React, { useEffect, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import ScreenContainer from '../../components/atoms/ScreenContainer';
import OptionControlBottomSheet from '../../components/organisms/OptionControlBottomSheet';
import helper from '../../utils/helper';
import MapView from './MapView';

const HomeScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    helper.hasLocationPermission().then(bool => {
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
