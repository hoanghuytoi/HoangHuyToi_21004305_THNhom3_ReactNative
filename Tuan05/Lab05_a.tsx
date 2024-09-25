import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

const YourApp = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'VT323': require('./assets/fonts/VT323-Regular.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>
          A premium online store for sporters and their stylish choice
        </Text>
      </View>
      <View style={styles.bgitem}>
        <Image 
          source={{ uri: 'https://i.imgur.com/xMfCBMT.png' }}  
          style={styles.image} 
          resizeMode="contain"
        />
      </View>
      <View style={styles.power}>
        <Text style={styles.powerText}>POWER BIKE</Text>
        <Text style={styles.shopText}>SHOP</Text>
      </View>
      <TouchableOpacity style={styles.btn_started}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'VT323',
    fontSize: 24,
    textAlign: 'center',
  },
  bgitem: {
    flex: 4,
    borderRadius: 50,
    backgroundColor: '#E941411A',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 20,
  },
  image: {
    width: '80%',
    height: '80%',
    borderRadius: 50,
    alignSelf: 'center',
  },
  power: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  powerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  shopText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  
  btn_started: {
    marginTop: 40,
    width: 300,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnText: {
    fontFamily: 'VT323',
    color: 'white',
    fontSize: 24,
  },
});

export default YourApp;
