import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Headerbg, ProArrow} from '../../constant/IMAGES';
import TextView from '../Textview';
import COLORS from '../../constant/COLOR';
const Header = ({title, image , name}) => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TouchableOpacity
          style={styles.Touchinner}
          onPress={() => nav.goBack()}>
          <Image source={ProArrow} style={styles.backArr} />
        </TouchableOpacity>

        <TextView
          label={title}
          fontSize={18}
          color={COLORS.white}
          fontWeight={700}
        />

        <View>
        
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backArr: {
    resizeMode: 'contain',
    width: 15,
    height: 18,
    // top: 10,
    // left: 10,
  },
  arrow: {
    resizeMode: 'contain',
    width: 15,
    height: 18,
    top:25,
    left:10
  },

  inner: {
    // paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    height:70,
    justifyContent: 'center',
  },
  Touchinner: {
    position: 'absolute',
    left: 15,
    top: 5,
  },
  image: {
    
  },
});

export default Header;
