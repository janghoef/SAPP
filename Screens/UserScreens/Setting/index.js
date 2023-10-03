import {
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import {
  Bg,
  creditcard,
  headset,
  key,
  star,
  usercross,
  useredit,
} from '../../../constant/IMAGES';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Homeheader from '../../../Components/Homeheader';

const Setting = () => {
  const [state, setState] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const toggal = () => {
    setState(!state);
  };
  const nav = useNavigation();
  return (
    <>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <Homeheader />

        <View style={{ backgroundColor: 'white', height: '100%', marginTop: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ width: '90%', alignSelf: 'center' }}>
              <TextView
                label={'Account Settings'}
                fontWeight={900}
                marginTop={10}
              />
              <CustomButton
                leftIcon={useredit}
                text={'Edit Profile'}
                bgColor={'#F6F6F6'}
                fontColor={'black'}
                borderColor={COLORS.grey3}
                borderRadius={10}
                borderWidth={1}
                marginTop={10}
                onPress={() => nav.navigate('EditProfile')}
              />
              <CustomButton
                leftIcon={key}
                text={'Change Password'}
                bgColor={'#F6F6F6'}
                fontColor={'black'}
                borderColor={COLORS.grey3}
                borderRadius={10}
                borderWidth={1}
                marginTop={7}
                onPress={() => nav.navigate('ChangePassword')}
              />
              <CustomButton
                leftIcon={usercross}
                text={'Delete Account'}
                bgColor={'#F6F6F6'}
                fontColor={'black'}
                borderColor={COLORS.grey3}
                borderRadius={10}
                borderWidth={1}
                marginTop={7}
                onPress={() => nav.navigate('DeleteAccount')}
              />
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.grey6,
                  borderStyle: 'dashed',
                  marginTop: 20,
                }}
              />
              <TextView
                label={'Payment Settings'}
                fontWeight={900}
                marginTop={10}
              />
              <CustomButton
                leftIcon={creditcard}
                text={'Payment Management'}
                bgColor={'#F6F6F6'}
                fontColor={'black'}
                borderColor={COLORS.grey3}
                borderRadius={10}
                borderWidth={1}
                marginTop={10}
                onPress={() => nav.navigate('PaymentSettings')}
              />
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.grey6,
                  borderStyle: 'dashed',
                  marginTop: 20,
                }}
              />
              <TextView label={'More'} fontWeight={900} marginTop={10} />
              <CustomButton
                leftIcon={headset}
                text={'Support'}
                bgColor={'#F6F6F6'}
                fontColor={'black'}
                borderColor={COLORS.grey3}
                borderRadius={10}
                borderWidth={1}
                marginTop={10}
                onPress={() => nav.navigate('Support')}
              />
              <CustomButton
                leftIcon={star}
                text={'Rate App'}
                bgColor={'#F6F6F6'}
                fontColor={'black'}
                borderColor={COLORS.grey3}
                borderRadius={10}
                borderWidth={1}
                marginTop={10}
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
};

export default Setting;
