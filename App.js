import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Routes from './src/routes';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

const App = () => {
  return (
    <AppProvider>
      <GestureHandlerRootView style={styles.wrapper}>
        <NavigationContainer>
          <Routes />
          <Toast />
        </NavigationContainer>
      </GestureHandlerRootView>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});

export default App;
