import React, { useState } from 'react';
import { View, ImageBackground, Image, ScrollView } from 'react-native';
import {
  Bg,
  ColorVerify,
  GooglePay,
  Master,
  PayPal,
  Visa,
} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import CustomInput from '../../../Components/CustomInput';
import COLORS from '../../../constant/COLOR';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const AddNewCard = () => {
  const nav = useNavigation();
  const [state, setState] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <Header title={'Add New Card'} />
        <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <Image source={ColorVerify} />
              <TextView
                label={'  Your Payment info is stored securely'}
                fontSize={15}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: 160,
                alignSelf: 'center',
                justifyContent: 'space-between',
              }}>
              <Image source={Master} style={{ height: 20, width: 35 }} />
              <Image source={Visa} style={{ height: 20, width: 35 }} />
              <Image source={PayPal} style={{ height: 20, width: 35 }} />
              <Image source={GooglePay} style={{ height: 20, width: 35 }} />
            </View>
            <TextView label={'Card Holder Name*'} marginTop={10} />
            <CustomInput
              placeholder={'Sarah Kevin'}
              placeholderTextColor={COLORS.black}
              borderColor={COLORS.grey6}
            />
            <TextView label={'Card Number   *'} marginTop={10} />
            <CustomInput
              placeholder={'5500-0000-0000-0000'}
              placeholderTextColor={COLORS.black}
              borderColor={COLORS.grey6}
              rightImg={Master}
            />
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <TextView label={'Expiry Date*'} />
                <CustomInput
                  placeholder={'mm/yy'}
                  placeholderTextColor={COLORS.black}
                  borderColor={COLORS.grey6}
                  width={155}
                />
              </View>
              <View>
                <TextView label={'CVV*'} />
                <CustomInput
                  placeholder={'****'}
                  placeholderTextColor={COLORS.black}
                  borderColor={COLORS.grey6}
                  width={155}
                />
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <CheckBox
                disabled={false}
                value={state}
                onValueChange={() => setState(!state)}
              />
              <TextView label={'Make Default'} marginTop={3} fontSize={13} />
            </View>

            <TextView
              label={
                'In order to verify your account we may charge your account with small amount that will be refunded.'
              }
              fontSize={13}
              alignSelf={'center'}
              marginTop={5}
            />

            <CustomButton
              text={'Add Card'}
              bgColor={COLORS.red}
              borderRadius={10}
              marginTop={20}
              onPress={() => nav.navigate('PaymentSettings')}
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default AddNewCard;
