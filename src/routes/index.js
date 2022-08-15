import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import SplashScreen from '../screens/Splash';
import HomeScreen from '../screens/Home';
import BottomTabBar from '../components/molecules/BottomTabBar';

function BottomTabNavigator() {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator
      initialRouteName="Dashboard"
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
}

const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Splash" component={SplashScreen} />
      <Screen name="Main" component={BottomTabNavigator} />
    </Navigator>
  );
};

export default Routes;
