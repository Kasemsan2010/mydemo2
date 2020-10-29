import AsyncStorage from '@react-native-community/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// import icon from lib
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackActions} from '@react-navigation/native';

// variable in object ดึง object
CMEntry = ({hint, isPassword, keyboardMode, onChange, icon}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {/* Icon */}
      <Icon name={icon} size={35} style={{width: 35}} />
      <TextInput
        style={{
          marginLeft: 8,
          flex: 1,
          paddingLeft: 16,
          borderWidth: 1,
          borderColor: '#0007',
          borderRadius: 5,
        }}
        onChangeText={onChange} //ตัวเเปรเเบบ prop
        keyboardType={keyboardMode} //ตัวเเปรเเบบ prop
        secureTextEntry={isPassword} //ตัวเเปรเเบบ prop
        placeholder={hint} //ตัวเเปรเเบบ prop
      />
    </View>
  );
};

export default function HomeScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // เมื่อ load component เสร็จ จะทำงาน
  React.useEffect(() => {
    setNavigationOption();
  }, []);

  setNavigationOption = () => {
    props.navigation.setOptions({
      title: 'Home',
      headerStyle: {
        backgroundColor: '#999CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: ' ',
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.1}
          onPress={() => alert('www.codemobiles.com')}
          style={{padding: 10}}>
          <Icon
            name="address-card"
            size={20}
            color="#fff"
            style={{
              height: 24,
              width: 24,
            }}
          />
        </TouchableOpacity>
      ),
    });
  };

  // onClickLogin = async () => {
  //   // await สั่งให้ Promise ทำงาน ถ้าไม่ใส่จะได้ เป็น Promise object
  //   // ถ้าไม่ใส่ await จะไม่สามารถ เอา item เข้าไปเก็บ ได้ เพราะว่า getItem return เป็น Promise
  //   // AsyncStorage.getItem get string from local storage
  //   const regUsername = await AsyncStorage.getItem('kUsername');
  //   const regPassword = await AsyncStorage.getItem('kPassword');

  //   if (username == regUsername && password == regPassword) {
  //     alert('Success');
  //     // props.navigation.navigate('Success');
  //   } else {
  //     alert('Failed : ' + `${regUsername} : ${regPassword}`);
  //     props.navigation.navigate('Success');
  //   }
  // }
  onClickLogin = async () => {
    const _username = await AsyncStorage.getItem('kUsername');
    const _password = await AsyncStorage.getItem('kPassword');

    if (username == _username && password == _password) {
      await AsyncStorage.setItem('token', 'xxxx');
      // props.navigation.navigate('Success');
      // props.navigation.navigate('Success');
      // ปุ่มกลับ บน menubar จะหายไป เเละจะถูกเเทนทับด้วย Success
      props.navigation.dispatch(StackActions.replace('Success'));
    } else {
      await AsyncStorage.removeItem('token');
      alert(`Login failed ${_username}, ${_password}`);
    }
  };

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('./assets/img/gradient_bg.png')}>
      {/* Banner */}
      <Image
        style={{height: 120, width: '100%'}}
        resizeMode="contain"
        source={require('./assets/img/header_react_native.png')}
      />

      {/* Authen section */}
      <View
        style={{
          backgroundColor: '#FFF3',
          marginLeft: 30,
          marginRight: 30,
          marginTop: 30,
          padding: 16,
          borderRadius: 10,
        }}>
        {/* Username */}
        <CMEntry
          hint="Username"
          keyboardMode="email-address"
          onChange={(text) => setUsername(text)}
          icon="user"
        />
        <View style={{height: 8}} />

        {/* Password */}
        <CMEntry
          hint="Password"
          isPassword={true}
          onChange={(text) => setPassword(text)}
          icon="lock"
        />

        {/* Confirm button */}
        <TouchableOpacity
          onPress={onClickLogin}
          style={{
            backgroundColor: '#0F0',
            height: 50,
            borderRadius: 10,
            borderColor: '#0007',
            marginTop: 20,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold'}}>LOGIN</Text>
        </TouchableOpacity>

        {/* Register button */}
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Register')}
          style={{
            height: 50,
            borderRadius: 10,
            borderColor: '#0003',
            marginTop: 10,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold'}}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
