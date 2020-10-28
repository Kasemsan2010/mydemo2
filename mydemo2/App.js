import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/HomeScreen';
import RegisterScreen from './src/RegisterScreen';

import AppNavigator from './src/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
        <AppNavigator />
      </View>
    </NavigationContainer>
  );
}
