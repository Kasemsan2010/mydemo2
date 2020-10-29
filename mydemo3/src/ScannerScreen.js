import React, {useState, useEffect, useRef} from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default function ScannerScreen() {
  const [isReady, setisReady] = useState(false);
  const scannerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setisReady(true);
    }, 1000);
  });

  const showScanner = () => {
    return (
      <QRCodeScanner
      // ref เปรียบเสมือน id ใน js
        ref={scannerRef}
        showMarker
        onRead={(e) => onSuccess(e.data)}
        style={{flex: 1}}
        bottomContent={
          <TouchableOpacity
            onPress={() => scannerRef.current.reactivate()}
            style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>SCAN</Text>
          </TouchableOpacity>
        }
      />
    );
  };
  const showLoading = () => {
    return (
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          textAlignVertical: 'center',
          color: 'white',
        }}>
        Loading...
      </Text>
    );
  };
  const onSuccess = (result) => {
    const {onResult} = props.route.params;
    onResult(result);
    props.navigation.goBack();
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {isReady ? showScanner() : showLoading()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  buttonText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFF',
  },
  buttonTouchable: {
    height: 50,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4a4d',
  },
});
