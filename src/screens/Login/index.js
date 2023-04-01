import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { useDispatch } from 'react-redux';
import socket from '../../../socket';
import { drivingImage, logoppa } from '../../assets/images';
import Button from '../../components/atoms/Button';
import CardContainer from '../../components/atoms/CardContainer';
import Input from '../../components/atoms/Input';
import Row from '../../components/atoms/Row';
import ScreenContainer from '../../components/atoms/ScreenContainer';
import Spacer from '../../components/atoms/Spacer';
import Typhography from '../../components/atoms/Typography';
import { userActions } from '../../redux/userSlice';
import defaultValue from '../../utils/defaultValue';
import helper from '../../utils/helper';
import styles from './styles';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [location, setLocation] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    helper.isSocketConnected();
  }, []);
  //"latitude": -6.3264655, "longitude": 106.6535628
  useEffect(() => {
    helper.hasLocationPermission().then(bool => {
      if (bool) {
        Geolocation.getCurrentPosition(
          position => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          error => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      }
    });
  }, []);

  useEffect(() => {
    socket.transportations.on('transportation:session', payload => {
      dispatch(userActions.setUser(payload));
    });
    return () => {
      socket.transportations.off('transportation:session');
    };
  }, [dispatch]);

  const handleJoin = () => {
    socket.transportations.emit('transportation:join', {
      name,
      location: {
        latitude: -6.3264655,
        longitude: 106.6635628,
      },
    });

    navigation.replace('Main');
  };

  return (
    <ScreenContainer
      scrollable={false}
      paddingHorizontal={0}
      extendStyle={styles.container}>
      <View style={styles.bg}>
        <Image source={drivingImage} style={styles.mapImage} />
      </View>
      <CardContainer extendStyle={styles.cardContainer}>
        <Image source={logoppa} style={styles.logoppa} />
        <Typhography
          text="PPA Fleet"
          variant="bold"
          fontSize="ultra-large"
          align="center"
        />
        <Spacer height={defaultValue.spacing.large} />
        <Row extendStyle={styles.join}>
          <Input width="70%" placeholder="Nama" onChangeText={setName} />
          <Button
            title="Join"
            width="25%"
            fontSize="medium"
            onPress={handleJoin}
          />
        </Row>
      </CardContainer>
    </ScreenContainer>
  );
};

export default LoginScreen;
