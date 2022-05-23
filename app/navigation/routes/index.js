import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTES from '@utils/routes';
import JsonInput from '@screens/json-input';
import Colors from '@utils/colors';
import Form from '@screens/form';
import I18n from '@i18n';

const Stack = createStackNavigator();

export function AppStack() {
  const screenOptions = {
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: Colors.whiteColor,
    },
    headerStyle: {
      backgroundColor: Colors.primaryColor,
      elevation: 2,
    },
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={ROUTES.JsonInput}
        component={JsonInput}
        options={{headerTitle: I18n.t('app_common.name')}}
      />
      <Stack.Screen
        name={ROUTES.Form}
        component={Form}
        options={{headerTitle: I18n.t('app_common.name')}}
      />
    </Stack.Navigator>
  );
}
