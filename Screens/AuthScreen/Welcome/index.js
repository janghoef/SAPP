import React, { useEffect } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { Centerlogo, Welcomebg, loading } from '../../../constant/IMAGES';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <>
      <ImageBackground
        source={Welcomebg}
        style={{
          height: '100%',
          width: '100',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={Centerlogo} />
          <LottieView
            style={{ height: 100, width: 100, top: 200 }}
            source={loading}
            autoPlay
            loop
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default Welcome;
