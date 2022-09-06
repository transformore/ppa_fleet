import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useMemo, useRef, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';
import Geolocation from 'react-native-geolocation-service';
import { locationActions } from '../../../redux/locationSlice';
import { currentLocationImage } from '../../../assets/images';

const OptionControlBottomSheet = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['15%', '50%'], []);

  const dispatch = useDispatch();

  const [disabledCurrentLocation, setDisabledCurrentLocation] = useState(false);

  const handleGetCurrentLocation = () => {
    setDisabledCurrentLocation(true);

    Geolocation.getCurrentPosition(
      position => {
        dispatch(locationActions.setMyCurrentLocation(position));
      },
      error => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );

    setDisabledCurrentLocation(false);
  };

  return (
    <View style={styles.containerBottomSheet}>
      <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
        <BottomSheetScrollView
          style={styles.optionControl}
          contentContainerStyle={styles.optionControlContainer}>
          <TouchableOpacity
            onPress={handleGetCurrentLocation}
            disabled={disabledCurrentLocation}>
            <Image
              source={currentLocationImage}
              style={styles.currentLocationImage}
            />
          </TouchableOpacity>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default OptionControlBottomSheet;
