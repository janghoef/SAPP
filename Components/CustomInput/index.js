import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import COLORS from '../../constant/COLOR';
import { eye } from '../../constant/IMAGES';



const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  setSecureTextEntry,
  keyboard,
  multiLine,
  numberOfLines,
  icon,
  leftIcon,
  secure,
  width,
  borderColor,
  rightImg,
  rightImg1,
  rightImg2,
  rightImg3,
  leftImg,
  marginBottom,
  placeholderTextColor,
  color,
  backgroundColor,
  borderRadius,
  paddingHorizontal,
  borderWidth,
  fontFamily,
  fontSize,
  textAlign,
  paddingVertical,
  marginHorizontal,
  alignSelf
  
}) => {
  return (
    <View
      style={[
        styles.container,
        borderColor ? { borderColor } : COLORS.black,
        width ? { width } : null,
        marginBottom ? { marginBottom } : {},
        borderRadius ? { borderRadius } : { borderRadius: 5 },
        paddingHorizontal ? { paddingHorizontal } : {},
        marginHorizontal ? { marginHorizontal } : {},
        borderWidth ? { borderWidth } : {},
        backgroundColor ? { backgroundColor: backgroundColor } : {},
        paddingHorizontal ? { paddingHorizontal: paddingHorizontal } : {},
        alignSelf ? { alignSelf: alignSelf } : {},
        
      ]}>
      {leftIcon == true ? <Image source={icon} style={styles.icon} /> : null}

      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={[styles.input, color ? color : COLORS.gray]}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboard ? keyboard : 'default'}
        multiline={multiLine}
        fontFamily={fontFamily}
        numberOfLines={numberOfLines}
        fontSize={fontSize}
        textAlign={textAlign}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : COLORS.gray
        }
      />
      <View>
        {secure === true ? (
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => setSecureTextEntry(!secureTextEntry)}>
            {/* <Image source={eye} style={styles.lock} /> */}
          </TouchableOpacity>
        ) : null}
        {rightImg ? <Image source={rightImg} style={styles.lock} /> : null}
        {rightImg1 ? <Image source={rightImg1} style={styles.lock1} /> : null}
        {rightImg2 ? <Image source={rightImg2} style={styles.lock2} /> : null}
        {rightImg3 ? <Image source={rightImg3} style={styles.lock3} /> : null}
      </View>
    </View>
  );
};

export default CustomInput;
