import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {
  Applered,
  Bg,
  Googlered,
  Paypalred,
  Stripe,
  creditred,
} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import {useNavigation} from '@react-navigation/native';

const AddPaymentMethod = () => {
  const nav = useNavigation();
  return (
    <ImageBackground source={Bg} style={{height: '100%'}}>
      <Header title={'Payment Type'} />
      <View style={{width: '100%', backgroundColor: 'white', height: '100%'}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <TextView
            label={'Add Payment Method'}
            fontWeight={700}
            marginTop={10}
          />
          <TouchableOpacity
            style={{flexDirection: 'row', marginTop: 30}}
            onPress={() => nav.navigate('AddNewCard')}>
            <Image source={creditred} />
            <TextView label={'  Credit/Debit Card'} />
          </TouchableOpacity>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: COLORS.grey6,
              marginTop: 15,
            }}
          />

          <View style={{flexDirection: 'row', marginTop: 30}}>
            <Image source={Paypalred} />
            <TextView label={'   PayPal'} />
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: COLORS.grey6,
              marginTop: 15,
            }}
          />

          <View style={{flexDirection: 'row', marginTop: 30}}>
            <Image source={Googlered} />
            <TextView label={'  Google Pay'} />
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: COLORS.grey6,
              marginTop: 15,
            }}
          />

          <View style={{flexDirection: 'row', marginTop: 30}}>
            <Image source={Applered} />
            <TextView label={'  Apple Pay'} />
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: COLORS.grey6,
              marginTop: 15,
            }}
          />

          <View style={{flexDirection: 'row', marginTop: 30}}>
            <Image source={Stripe} />
            <TextView label={'  Stripe'} />
          </View>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderColor: COLORS.grey6,
              marginTop: 15,
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default AddPaymentMethod;
