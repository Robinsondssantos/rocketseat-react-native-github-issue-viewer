import React from 'react';
// import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

// import Routes from './Routes'

import MainScreen from './pages/Main'

const Stack = createStackNavigator();

export default function User() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
