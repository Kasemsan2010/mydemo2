import React, {useState} from 'react';
import {
  View,
  Text,
  IM,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default function RegisterScreen(props) {
  //variable state จะทำการ detect ทันทีเมื่อมีการเปลี่ยนเเปลง หรือ View จะเปลี่ยนเเปลงทันที track ตาม
  // ตัวเเปรธรรมดา จะไว้เก็บ หน้าจอ view จะไม่เปลี่ยน จะเปลี่ยน เเปลง ก็ต่อเมื่อ มี Action get ค่าออกมา let var const
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  React.useEffect(() => {
    setNavigationOption();
  }, []);

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup; ดับตอนจังหวะถูกทำลาย
  //   };
  // }, [input]);

  setNavigationOption = () => {
    props.navigation.setOptions({
      title: 'Register',
      headerStyle: {
        backgroundColor: '#999CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: ' ',
      headerRight: () => {},
    });
  };

  onClickRegister = async () => {
    // ยัด Object ตรงๆไม่ได้ ต้องเเปลง เป็น json string
    // AsyncStorage.setItem การนำ string เก็บไว้ใน Local Storage argument 1 : id ; argument 2 : string input
    await AsyncStorage.setItem('kUsername', username);
    await AsyncStorage.setItem('kPassword', password);
    // Function back to page before
    props.navigation.goBack();
  };
  //=================================================
  return (
    // เราไม่สามารถ Add รูปภาพเข้าไปใน View ได้
    <ImageBackground
      style={{flex: 1}}
      // {{url:""}} เป็นการโหลดรูปจาก Network
      // {{require('path File')}} เป็นการโหลดรูปจาก Path File
      source={require('./assets/img/gradient_bg.png')}>
      <Image
        style={{height: 120, width: '100%'}}
        resizeMode="contain" //กำหนดรูปให้พอดี
        source={require('./assets/img/header_react_native.png')}
      />
      {/* Authen section */}
      <View
        style={{
          backgroundColor: '#FFF3',
          margin: 10,
          marginLeft: 30,
          marginRight: 30,
          marginTop: 30,
          borderRadius: 10,
          padding: 16,
        }}>
        {/* Username */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* Icon */}
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: 'red',
              borderRadius: 20,
            }}
          />
          <TextInput
            onChangeText={(text) => setusername(text)}
            style={{
              marginLeft: 16,
              paddingLeft: 16,
              flex: 1,
              borderWidth: 1,
              borderColor: '#000',
              borderRadius: 2,
            }}
            placeholder="Username"
          />
        </View>
        <View style={{height: 8}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* Icon */}
          <View
            style={{
              height: 40,
              width: 40,
              backgroundColor: 'yellow',
              borderRadius: 20,
            }}
          />
          <TextInput
            onChangeText={(text) => setpassword(text)}
            style={{
              marginLeft: 16,
              paddingLeft: 16,
              flex: 1,
              borderWidth: 1,
              borderColor: '#000',
              borderRadius: 2,
            }}
            placeholder="Password"
          />
        </View>
        {/* Confirm button */}
        <TouchableOpacity
          //lambda syntax
          onPress={onClickRegister}
          style={{
            backgroundColor: '#0F0',
            height: 50,
            borderColor: '#0007',
            borderRadius: 10,
            marginTop: 20,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold'}}>CONFIRM</Text>
        </TouchableOpacity>
        {/* Cancel button */}
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{
            height: 50,
            borderColor: '#0007',
            borderRadius: 10,
            marginTop: 20,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold'}}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
