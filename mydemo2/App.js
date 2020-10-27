import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '.src/HomeScreen';
import RegisterScreen from './src/RegisterScreen';
import AppNavigator from './src/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
      </View>
      <AppNavigator />
    </NavigationContainer>
  );
}
