import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';
import JSONFeedScreen from './JSONFeedScreen';
import CameraScreen from './CameraScreen';
import YoutubeScreen from './YoutubeScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const successOption = (props) => {
  return {
    title: 'Success',
    headerStyle: {
      backgroundColor: '#999CED',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {color: '#fff'},
    headerBackTitle: ' ',
    headerRight: () => (
      <TouchableOpacity
        activeOpacity={0.1}
        onPress={async () => {
          // await AsyncStorage.removeItem('token');
          // props.setIsReady(false);
        }}
        style={{padding: 10}}>
        <Icon
          name="sign-out"
          size={20}
          color="#fff"
          style={{
            height: 24,
            width: 24,
          }}
        />
      </TouchableOpacity>
    ),
  };
};

const RootStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{title: 'Register'}}
        />
        <Stack.Screen
          name="Success"
          component={SuccessTab}
          options={successOption(props)}
        />
      </>
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();

const tab1 = {
  tabBarLabel: 'JSON',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_profile_select.png')
          : require('./assets/img/ic_profile.png')
      }
    />
  ),
};

const tab2 = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_card_select.png')
          : require('./assets/img/ic_card.png')
      }
    />
  ),
};

// start
const JSONStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="JSON">
      <Stack.Screen component={JSONFeedScreen} name="JSON" />
      <Stack.Screen component={YoutubeScreen} name="Youtube" />
    </Stack.Navigator>
  );
};
//end

const SuccessTab = () => {
  return (
    <Tab.Navigator initialRouteName="JSON">
      <>
        <Tab.Screen name="JSON" component={JSONStackScreen} options={tab1} />
        <Tab.Screen name="Camera" component={CameraScreen} options={tab2} />
      </>
    </Tab.Navigator>
  );
};

export default RootStack;
