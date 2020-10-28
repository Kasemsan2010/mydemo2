import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';

import HomeScreen from './src/HomeScreen';
import RegisterScreen from './src/RegisterScreen';

import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem('token').then((token) => {
      setShowLogin(token == null ? true : false);
      setIsReady(true);
    });
  }, [isReady]);

  return (
    <NavigationContainer>
      {isReady ? (
        <View style={{flex: 1}}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView />
          <AppNavigator showAuthen={showLogin} setIsReady={setIsReady} />
        </View>
      ) : null}
    </NavigationContainer>
  );
}
