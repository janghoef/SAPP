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

const QuickExit = () => {
  const nav = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <Header title={'Fake Text'} />
        <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <TextView
              label={
                'Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ut erat tristique, auctor nunc eu, condimentum urna?'
              }
              fontSize={14}
              marginTop={15}
            />

            <CustomInput
              placeholder={'Display Name'}
              borderColor={COLORS.black}
              placeholderTextColor={COLORS.black}
              rightImg3={panedit}
              leftIcon={true}
              icon={person}

            />
            <CustomInput
              placeholder={'Display Contact No'}
              borderColor={COLORS.black}
              placeholderTextColor={COLORS.black}
              rightImg3={panedit}
              leftIcon={true}
              icon={phone}
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
            <TextView label={'Create Passcode'} fontSize={14} marginTop={10} />
            <View
              style={{
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <CustomInput
                borderRadius={10}
                borderColor={COLORS.gray2}
                placeholder={'5'}
                placeholderTextColor={COLORS.black}
                width={60}
                fontSize={25}
                textAlign={'center'}
              />
              <CustomInput
                borderRadius={10}
                borderColor={COLORS.gray2}
                placeholder={'4'}
                placeholderTextColor={COLORS.black}
                width={60}
                fontSize={25}
                textAlign={'center'}
              />
              <CustomInput
                borderRadius={10}
                borderColor={COLORS.gray2}
                placeholder={'3'}
                placeholderTextColor={COLORS.black}
                width={60}
                fontSize={25}
                textAlign={'center'}
              />
              <CustomInput
                borderRadius={10}
                borderColor={COLORS.gray2}
                placeholder={''}
                placeholderTextColor={COLORS.black}
                width={60}
                fontSize={25}
                textAlign={'center'}
              />
              <CustomInput
                borderRadius={10}
                borderColor={COLORS.gray2}
                placeholder={''}
                placeholderTextColor={COLORS.black}
                width={60}
                fontSize={25}
                textAlign={'center'}
              />
            </View>
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

export default QuickExit;
