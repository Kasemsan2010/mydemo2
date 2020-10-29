import React from 'react';
import {View, SafeAreaView, StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';

export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    // console.disableYellowBox =true;
    <NavigationContainer>
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        {/*  SafeAreaView Detact ว่า Device มีรอยบากไหม ถ้ามีจะMargin Auto */}
        <SafeAreaView />
        <AppNavigator />
      </View>
    </NavigationContainer>
  );
}
