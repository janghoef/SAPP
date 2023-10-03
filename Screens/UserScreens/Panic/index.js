import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import { Bg, panedit, person, phone } from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Panic = () => {
  const nav = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <Header title={'Panic Button Settings'} />
        <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <TextView
              label={
                'Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ut erat tristique, auctor nunc eu, condimentum urna? '
              }
              fontSize={14}
              marginTop={15}
            />

            <CustomInput
              placeholder={'+1 223 445 6789'}
              borderColor={COLORS.black}
              placeholderTextColor={COLORS.black}
              rightImg3={panedit}
              leftIcon={true}
              icon={person}
            />
            <CustomInput
              placeholder={'+1 223 445 6790'}
              borderColor={COLORS.black}
              placeholderTextColor={COLORS.black}
              rightImg3={panedit}
              leftIcon={true}
              icon={person}
            />
            <CustomInput
              placeholder={'+1 223 445 6791'}
              borderColor={COLORS.black}
              placeholderTextColor={COLORS.black}
              rightImg3={panedit}
              leftIcon={true}
              icon={person}
            />

            <TextView label={'Custom Message'} marginTop={5} />
            <TextInput
              placeholder="Enter Message (Max 160 Characters)"
              multiline={true}
              placeholderTextColor={COLORS.black}
              style={{
                borderWidth: 1,
                borderColor: COLORS.black,
                borderRadius: 10,
                height: 130,
                marginTop: 5,
                textAlignVertical:'top',
                padding:10
              }}
            />

            <CustomButton
              text={'Save Setting'}
              bgColor={COLORS.red}
              borderRadius={10}
              marginTop={20}
              onPress={() => nav.navigate('Home')}
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
export default Panic;
