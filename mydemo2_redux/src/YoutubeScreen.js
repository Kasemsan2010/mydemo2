import React from 'react';
import {View, Text, StyleSheet, PixelRatio, ScrollView} from 'react-native';
import YouTube from 'react-native-youtube';

const YoutubeScreen = ({navigation, route}) => {
  const setNavigationOption = () => {
    navigation.setOptions({
      title: route.params.item.title,
      headerStyle: {
        backgroundColor: '#339CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: ' ',
    });
  };
  React.useEffect(() => {
    setNavigationOption();
  }, []);

  return (
    <View style={{flex: 1}}>
      <YouTube
        apiKey="YOUR_API_KEY" // required for android
        videoId={route.params.item.id} // The YouTube video ID
        play={true} // control playback of video with true/false
        fullscreen={true} // control whether the video should play in fullscreen or inline
        loop={true} // control whether the video should loop when ended
        onReady={(e) => {}}
        onChangeState={(e) => {}}
        onChangeQuality={(e) => {}}
        onError={(e) => {}}
        style={{alignSelf: 'stretch', height: 300}}
      />
    </View>
  );
};

export default YoutubeScreen;
