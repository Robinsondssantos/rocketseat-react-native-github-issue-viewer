import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import MainScreen from './pages/Main';
import UserScreen from './pages/User';

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Usuários"
        component={MainScreen}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: '#7159c1'
          },
          headerTintColor: '#ffffff'
        }}
      />
      <Stack.Screen name="User"
        component={UserScreen}
      />
    </Stack.Navigator>
  );
}
