import React, {memo, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ROUTES from '@utils/routes';
import {AppStack} from './routes';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerMode: 'screen'}}>
        <Stack.Screen
          name={ROUTES.App}
          component={AppStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(AppNavigator);
