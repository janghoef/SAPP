import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../../constant/COLOR';

const CustomButton = ({
  onPress,
  fontWeight,
  text,
  fontSize,
  bgColor,
  fontColor,
  width,
  marginTop,
  Icon,
  borderRadius,
  marginBottom,
  leftIcon,
  borderWidth,
  height,
  borderColor,
  position,
  bottom,
  alignSelf
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        bgColor ? {backgroundColor: bgColor} : {},
        position ? {position: position} : {},
        bottom ? {bottom: bottom} : {},
        width ? {width} : {},
        borderRadius ? {borderRadius} : {},
        marginTop ? {marginTop} : {},
        Icon
          ? {
              flexDirection: 'row',
              justifyContent: 'center',
              paddingHorizontal: 20,
            }
          : {},
        leftIcon ? {flexDirection: 'row', justifyContent: 'flex-start'} : {},
        marginBottom ? {marginBottom} : {},
        borderWidth ? {borderWidth} : {},
        height ? {height} : {},
        borderColor ? {borderColor} : {},
        fontColor ? {color: fontColor} : {},
        fontWeight ? {fontWeight} : {},
        fontSize ? {fontSize} : {},
        

      ]}>
      {leftIcon ? <Image source={leftIcon} style={styles.left} /> : null}
      <Text
        style={[
          styles.text,

          fontColor ? {color: fontColor} : {},
          fontWeight ? {fontWeight} : {},
          fontSize ? {fontSize} : {},
          
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  left: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginHorizontal: 15,
    
  },
  text: {
    fontWeight: 'light',
    color: COLORS.white,
    fontSize: 18,
  },
  image: {
    height: 15,
    width: 15,
    tintColor: COLORS.white,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.black,
    width: '100%',
    height: 50,
    alignSelf: 'center',
  },
});

export default CustomButton;
