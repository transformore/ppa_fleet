import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Routes from './src/routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes />
        <Toast />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
