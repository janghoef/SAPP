import React from 'react';
import { View, Image, ImageBackground, ScrollView } from 'react-native';
import {
  Bg,
  Bigprofile,
  Flag,
  camera,
  edit,
  femaleicon,
  verified,
} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import CustomInput from '../../../Components/CustomInput';
import COLORS from '../../../constant/COLOR';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
  const nav = useNavigation();
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={Bg} style={{ height: '100%' }}>
          <Header title={'Edit Profile'} />
          <View
            style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            <View style={{ width: '90%', alignSelf: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 20,
                  left: 20,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 100,
                    width: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    shadowColor: '#000000',
                    shadowOffset: {
                      width: 10,
                      height: 20,
                    },
                    shadowOpacity: 0.8,
                    shadowRadius: 1.8,
                    elevation: 10,
                  }}>
                  <View>
                    <Image
                      source={Bigprofile}
                      style={{ height: 80, width: 80, resizeMode: 'cover' }}
                    />
                  </View>
                </View>
                <Image source={camera} style={{ right: 30 }} />
              </View>

              <View style={{ marginTop: 20 }}>
                <CustomInput
                  placeholder={'Sarah Kevin'}
                  placeholderTextColor={COLORS.black}
                  borderColor={COLORS.grey3}
                  borderRadius={10}
                  fontSize={16}
                  rightImg={verified}
                  // color={'#000'}
                />
                <CustomInput
                  placeholder={'Female'}
                  placeholderTextColor={COLORS.black}
                  borderColor={COLORS.grey3}
                  borderRadius={10}
                  fontSize={16}
                  rightImg={femaleicon}
                />
                <CustomInput
                  placeholder={'user@domain.com'}
                  placeholderTextColor={COLORS.black}
                  borderColor={COLORS.grey3}
                  borderRadius={10}
                  fontSize={16}
                  rightImg={verified}
                />
                <CustomInput
                  leftIcon={true}
                  icon={Flag}
                  borderRadius={10}
                  borderColor={COLORS.grey3}
                  placeholder={'+1 | 223 445 6789'}
                  placeholderTextColor={COLORS.black}
                  fontSize={16}
                  rightImg3={edit}
                />
                <CustomInput
                  placeholder={'DOB |October/10/1990'}
                  placeholderTextColor={COLORS.black}
                  borderColor={COLORS.grey3}
                  borderRadius={10}
                  fontSize={16}
                />
              </View>
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
    </>
  );
};

export default EditProfile;
