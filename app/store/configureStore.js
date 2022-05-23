import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';

import appReducer from '../reducers';
import {persistStore, persistReducer, PERSIST, PURGE} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 0,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export default function Store() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(logger),
  });

  const persistor = persistStore(store);
  return {store, persistor};
}
