import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Image,
  Switch,
  ScrollView,
} from 'react-native';
import {
  Bg,
  clock,
  rigtharrow,
} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const FakeCallGenerator = () => {
  const [state, setState] = useState();
  const toggal = () => {
    setState(prev => !prev);
  };
  const nav = useNavigation();
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <Header title={'Fake Call Generator'} />
        <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <View
              style={{
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                  height: 50,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={clock} style={{ height: 18, width: 18 }} />
                  <TextView
                    label={' |'}
                    fontSize={30}
                    marginTop={-3}
                    color={COLORS.grey6}
                  />
                  <View>
                    <TextView
                      label={'  07:00 '}
                      color={COLORS.black}
                      fontSize={18}
                    />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TextView
                    label={' |'}
                    fontSize={30}
                    marginTop={-3}
                    color={COLORS.grey6}
                  />
                  <View>
                    <TextView
                      label={'  AM'}
                      color={COLORS.black}
                      fontSize={18}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <TextView label={'Ringtone'} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextView label={'Default ringtone  '} />
                <Image source={rigtharrow} />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <TextView label={'Repeat'} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextView label={'Once  '} />
                <Image source={rigtharrow} />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <TextView label={'Vibrate when call'} />
              <Switch
                  trackColor={{false: 'grey', true: 'green'}}
                  onValueChange={toggal}
                  thumbColor={state ? 'black' : 'white'}
                  value={state}
                  style={{alignSelf: 'flex-start', height: 20, width: 20}}
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

export default FakeCallGenerator;
