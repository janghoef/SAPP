import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  Bg,
  Pluse,
  clock,
  panedit,
  person,
  phone,
} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const FakeCall = () => {
  const [state, setState] = useState();
  const toggal = () => {
    setState(prev => !prev);
  };
  const nav = useNavigation();
  return (
    <ImageBackground source={Bg} style={{height: '100%'}}>
      <Header title={'Fake Call Generator'} />
      <View style={{height: '100%', width: '100%', backgroundColor: 'white'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <TextView
              label={
                'Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus ut erat tristique, auctor nunc eu, condimentum urna? '
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

            <TextView label={'Create Passcode'} fontSize={14} marginTop={10} />
            <TextView
              label={'Interdum et malesuada fames ac ante ipsum.'}
              fontSize={14}
              marginTop={3}
            />

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
              />
              <CustomInput
                borderRadius={10}
                borderColor={COLORS.gray2}
                placeholder={'4'}
                placeholderTextColor={COLORS.black}
                width={60}
                fontSize={25}
              />
              <CustomInput
                borderRadius={10}
                borderColor={COLORS.gray2}
                placeholder={'3'}
                placeholderTextColor={COLORS.black}
                width={60}
                fontSize={25}
              />
              <CustomInput
                borderRadius={10}
                borderColor={COLORS.gray2}
                placeholder={''}
                placeholderTextColor={COLORS.black}
                width={60}
                fontSize={25}
              />
              <CustomInput
                borderRadius={10}
                borderColor={COLORS.gray2}
                placeholder={''}
                placeholderTextColor={COLORS.black}
                width={60}
                fontSize={25}
              />
            </View>

            <View
              style={{
                borderWidth: 1,
                borderColor: 'white',
                backgroundColor: 'white',
                height: 40,
                justifyContent: 'center',
                borderRadius: 10,
                marginTop: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={clock} style={{height: 18, width: 18}} />
                  <TextView
                    label={' |'}
                    fontSize={30}
                    marginTop={-3}
                    color={COLORS.grey6}
                  />
                  <View>
                    <TextView
                      label={'  07:00 am'}
                      color={COLORS.black}
                      fontSize={12}
                    />
                    <TextView
                      label={'  Once'}
                      color={COLORS.black}
                      fontSize={10}
                    />
                  </View>
                </View>
                <Switch
                  trackColor={{false: 'grey', true: 'green'}}
                  onValueChange={toggal}
                  thumbColor={state ? 'black' : 'white'}
                  value={state}
                  style={{alignSelf: 'flex-start', height: 20, width: 20}}
                />
              </View>
            </View>

            <TouchableOpacity
              style={{alignSelf: 'center', marginTop: 20}}
              onPress={() => nav.navigate('FakeCallGenerator')}>
              <Image source={Pluse} />
            </TouchableOpacity>

            <CustomButton
              text={'Save Setting'}
              bgColor={COLORS.red}
              borderRadius={10}
              marginTop={20}
              onPress={() => nav.navigate('Home')}
            />
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default FakeCall;
