import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import {
  Bg,
  Centerlogo,
  eye,
} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {
  const [secure, setSecure] = useState(true);
  const nav = useNavigation();
  return (
    <>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <ScrollView>
          <Header />
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <Image source={Centerlogo} style={{ alignSelf: 'center' }} />
            <TextView
              label={'Reset Password'}
              color={COLORS.white}
              fontWeight={700}
              alignSelf={'center'}
              marginTop={15}
            />
            <View style={{ marginTop: 15 }}>
              <CustomInput
                borderRadius={10}
                backgroundColor={COLORS.gray}
                borderColor={COLORS.gray2}
                placeholder={'Enter New Password'}
                placeholderTextColor={COLORS.white}
                secure={true}
                secureTextEntry={secure}
                setSecureTextEntry={setSecure}
                rightImg2={eye}
              />
              <CustomInput
                borderRadius={10}
                backgroundColor={COLORS.gray}
                borderColor={COLORS.gray2}
                placeholder={'Confirm Password'}
                placeholderTextColor={COLORS.white}
                secure={true}
                secureTextEntry={secure}
                setSecureTextEntry={setSecure}
                rightImg2={eye}
              />
            </View>
            <CustomButton
              text={'Save'}
              bgColor={COLORS.red}
              marginTop={10}
              borderRadius={10}
              onPress={() => nav.navigate('LoginEmail')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default ResetPassword;