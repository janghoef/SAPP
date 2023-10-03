import { View, ImageBackground, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Bg, blackeye } from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import CustomInput from '../../../Components/CustomInput';
import COLORS from '../../../constant/COLOR';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ChangePassword = () => {
  const nav = useNavigation();
  const [secure, setSecure] = useState(true);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <Header title={'Change Password'} />
        <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
          <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }}>
            <CustomInput
              placeholder={'Current Password'}
              placeholderTextColor={COLORS.grey6}
              borderColor={COLORS.black}
              backgroundColor={COLORS.white}
              borderRadius={10}
              secure={true}
              secureTextEntry={secure}
              setSecureTextEntry={setSecure}
              rightImg2={blackeye}
            />
            <CustomInput
              placeholder={'New Password'}
              placeholderTextColor={COLORS.grey6}
              borderColor={COLORS.black}
              backgroundColor={COLORS.white}
              borderRadius={10}
              secure={true}
              secureTextEntry={secure}
              setSecureTextEntry={setSecure}
              rightImg2={blackeye}
            />
            <CustomInput
              placeholder={'Confirm Password'}
              placeholderTextColor={COLORS.grey6}
              borderColor={COLORS.black}
              backgroundColor={COLORS.white}
              borderRadius={10}
              secure={true}
              secureTextEntry={secure}
              setSecureTextEntry={setSecure}
              rightImg2={blackeye}
            />
            <CustomButton
              text={'Save'}
              bgColor={COLORS.red}
              width={'100%'}
              marginTop={20}
              borderRadius={10}
              onPress={() => nav.navigate('setting')}
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default ChangePassword;
