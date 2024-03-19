import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import Login from '../Login';
import splashimage from '../assets/splashimg.png'


const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login2');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
    <Image source={splashimage} style={styles.backgroundImage}/>
      <Text style={styles.text}>Fashion Tap</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '70%',
    resizeMode: 'cover', 
  },
 
  text: {
    color: 'white',
    fontSize: 34,
    
    textAlign: 'center',
    marginTop: '10%',
    
  },
});

export default SplashScreen;
