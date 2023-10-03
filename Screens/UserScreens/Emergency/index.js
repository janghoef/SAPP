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
import React, { useState } from 'react';
import {
  Bg,
  DownArr,
  Pluse,
  clock,
  envelope,
  panedit,
  person,
  phone,
  redarrow,
} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const Emergency = () => {
  const [state, setState] = useState();
  const toggal = () => {
    setState(!state);
  };
  const nav = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Reason #1', value: 'Reason #1'},
    {label: 'Reason #2', value: 'Reason #2'},
    {label: 'Reason #3', value: 'Reason #3'},
    {label: 'Reason #4', value: 'Reason #4'},
    {label: 'Reason #5', value: 'Reason #5'},
  ]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <Header title={'Emergency Message'} />
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
           <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder='Select Message Category'
                placeholderStyle={{color:COLORS.black}}
                style={{marginTop:10}}
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
                  alignItems:'center'
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
                  trackColor={{ false: 'grey', true: '#1FD52C' }}
                  onValueChange={toggal}
                  thumbColor={state ? 'black' : 'white'}
                  value={state}
                  style={{ alignSelf: 'flex-start', height: 20, width: 20 ,marginTop:5}}
                />
              </View>
            </View>

            <TouchableOpacity
              style={{ alignSelf: 'center', marginTop: 20 }}
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
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Emergency;
