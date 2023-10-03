import React from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  Bg,
  Darrow,
  Map,
  SendArrow,
  whiteemail,
} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import CustomInput from '../../../Components/CustomInput';
import COLORS from '../../../constant/COLOR';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const UserLocation = () => {
  const nav = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={Bg}>
        <Header image title={'Location'} />
        <View>
          <ImageBackground
            source={Map}
            borderTopLeftRadius={40}
            borderTopRightRadius={40}
            style={{
              height: 720,
              width: 400,
              marginTop: 20,
              alignSelf: 'center',

            }}
          >
          <View style={{marginTop:10}}>
          <CustomInput
            leftIcon={true}
            icon={whiteemail}
            placeholder={'Search Location'}
            rightImg3={SendArrow}
            backgroundColor={COLORS.black}
            width={'85%'}
            alignSelf={'center'}
            
          />
          <CustomInput
            placeholder={'(GMT-8) Pacific Time (US & Canada)'}
            rightImg={Darrow}
            backgroundColor={COLORS.black}
            width={'85%'}
            alignSelf={'center'}
          />
       </View>
       <View style={{top:420}}>
          <CustomButton
            text={'Save'}
            bgColor={COLORS.red}
            borderRadius={10}
            width={'85%'}
            onPress={() => nav.navigate('Home')}
          />
      </View>

          </ImageBackground>
        </View>
        
      </ImageBackground>
    </ScrollView>
  );
};

export default UserLocation;
