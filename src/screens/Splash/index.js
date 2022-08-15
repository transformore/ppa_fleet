import React from 'react';
import { Image, View } from 'react-native';
import { logoppa } from '../../assets/images';
import ScreenContainer from '../../components/atoms/ScreenContainer';
import styles from './styles';

const SplashScreen = ({ navigation }) => {
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     navigation.replace('Home');
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [navigation]);

  return (
    <ScreenContainer scrollable={false}>
      <View style={styles.container}>
        <Image source={logoppa} style={styles.logo} />
      </View>
    </ScreenContainer>
  );
};

export default SplashScreen;
