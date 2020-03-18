import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './routes'

export default function User() {
  return (
    <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="#7159c1"
    />
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
    </>
  );
}
