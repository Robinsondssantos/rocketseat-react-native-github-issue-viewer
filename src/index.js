import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

// import Routes from './Routes'

import MainScreen from './pages/Main';
import UserScreen from './pages/User';

const Stack = createStackNavigator();

export default function User() {
  return (
    <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="#7159c1"
    />
    <NavigationContainer>
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
    </NavigationContainer>
    </>
  );
}
