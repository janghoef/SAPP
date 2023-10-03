import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Bg, DP, Darrow, Flag, calendar, eye } from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import CustomInput from '../../../Components/CustomInput';
import COLORS from '../../../constant/COLOR';
import CustomButton from '../../../Components/CustomButton';
import TextView from '../../../Components/Textview';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const nav = useNavigation();
  const [secure, setSecure] = useState(true);
  return (
    <ImageBackground source={Bg} style={{ height: '100%' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header title={'Signup'} />
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <Image source={DP} style={{ alignSelf: 'center', marginTop: 20 }} />
          <View style={{ marginTop: 10 }}>
            <CustomInput
              placeholder={'Full Name'}
              placeholderTextColor={COLORS.white}
              borderColor={COLORS.gray2}
              backgroundColor={COLORS.gray}
              borderRadius={10}
            />
            <CustomInput
              placeholder={"I'm a?"}
              placeholderTextColor={COLORS.white}
              borderColor={COLORS.gray2}
              backgroundColor={COLORS.gray}
              rightImg={Darrow}
              borderRadius={10}
            />
            <CustomInput
              placeholder={'Email'}
              placeholderTextColor={COLORS.white}
              borderColor={COLORS.gray2}
              backgroundColor={COLORS.gray}
              borderRadius={10}
            />
            <CustomInput
              leftIcon={true}
              icon={Flag}
              borderRadius={10}
              backgroundColor={COLORS.gray}
              borderColor={COLORS.gray2}
              placeholder={'+1 | Mobile Number'}
              placeholderTextColor={COLORS.white}
            />
            <CustomInput
              placeholder={'DOB | MM/DD/YYYY'}
              placeholderTextColor={COLORS.white}
              borderColor={COLORS.gray2}
              backgroundColor={COLORS.gray}
              borderRadius={10}
              rightImg={calendar}
            />
            <CustomInput
              placeholder={'Create Password'}
              placeholderTextColor={COLORS.white}
              borderColor={COLORS.gray2}
              backgroundColor={COLORS.gray}
              borderRadius={10}
              secure={true}
              secureTextEntry={secure}
              setSecureTextEntry={setSecure}
              rightImg1={eye}
            />
            <CustomInput
              placeholder={'Confirm Password'}
              placeholderTextColor={COLORS.white}
              borderColor={COLORS.gray2}
              backgroundColor={COLORS.gray}
              borderRadius={10}
              secure={true}
              secureTextEntry={secure}
              setSecureTextEntry={setSecure}
              rightImg1={eye}
            />
            <CustomButton
              text={'Continue'}
              bgColor={COLORS.red}
              width={'100%'}
              marginTop={20}
              borderRadius={10}
              onPress={() => nav.navigate('SignupOTP')}
            />
          </View>
          <View
            style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
            <TextView
              label={'Already have an account?'}
              color={COLORS.white}
              fontSize={13}
            />
            <TouchableOpacity onPress={() => nav.navigate('LoginEmail')}>
              <TextView
                label={'  Login'}
                color={COLORS.white}
                fontSize={13}
                fontWeight={700}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Signup;
