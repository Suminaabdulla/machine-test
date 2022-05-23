/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, useColorScheme} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import AppNavigator from './navigation/app-navigator';
import configureStore from './store/configureStore';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const {persistor, store} = configureStore();

export function RootNavigation() {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
}

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
