import React from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import { Bg } from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Support = () => {
  const nav = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <Header title={'Support'} />
        <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <TextView
              label={'You can send us a support request here, or email us '}
              fontSize={14}
              marginTop={15}
            />

            <View style={{ flexDirection: 'row' }}>
              <TextView label={'directly at'} fontSize={14} />
              <TextView
                label={' support@domain.com. '}
                fontSize={14}
                color={'red'}
              />
              <TextView label={'We will respond to'} fontSize={14} />
            </View>

            <TextView
              label={'you via email as soon as possible.'}
              fontSize={14}
            />
            <View
              style={{
                borderWidth: 0.5,
                borderColor: COLORS.grey6,
                marginTop: 20,
              }}
            />
            <TextView
              label={'Please provide the best email to reach you.'}
              fontSize={15}
              marginTop={10}
            />
            <CustomInput
              placeholder={'Email Address'}
              borderColor={COLORS.grey6}
            />
            <TextInput
              placeholder="Description"
              multiline={true}
              style={{
                borderWidth: 1,
                borderColor: COLORS.grey6,
                borderRadius: 10,
                height: 130,
                marginTop: 5,
                textAlignVertical:'top',
                padding:10
              }}
            />
            <TextView
              label={
                'Please provide a detailed description of what you are experiencing or any questions you may have so that we can best assist you.'
              }
              fontSize={14}
              marginTop={10}
            />
            <CustomButton
              text={'Send'}
              bgColor={COLORS.red}
              borderRadius={10}
              marginTop={20}
              onPress={() => nav.navigate('setting')}
            />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Support;
