import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Bg,
  Centerlogo,
  lock,
  whiteemail,
} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

const LoginEmail = () => {
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation();
  return (
    <>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <ScrollView>
          <Header />
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <Image source={Centerlogo} style={{ alignSelf: 'center' }} />
            <TextView
              label={'Login'}
              color={COLORS.white}
              fontWeight={700}
              alignSelf={'center'}
              marginTop={15}
            />
            <View style={{ marginTop: 15 }}>
              <CustomInput
                leftIcon={true}
                icon={whiteemail}
                borderRadius={10}
                backgroundColor={COLORS.gray}
                borderColor={COLORS.gray2}
                placeholder={'Email Adress'}
                placeholderTextColor={COLORS.white}
              />
              <CustomInput
                leftIcon={true}
                icon={lock}
                borderRadius={10}
                backgroundColor={COLORS.gray}
                borderColor={COLORS.gray2}
                placeholder={'Password'}
                placeholderTextColor={COLORS.white}
              />
            </View>
            <TouchableOpacity
              style={{ alignSelf: 'flex-end' }}
              onPress={() => nav.navigate('ForgotPassword')}>
              <TextView
                label={'Forgot Password?'}
                color={COLORS.white}
                fontSize={12}
              />
              <View style={{ borderColor: COLORS.white, borderWidth: 0.3 }} />
            </TouchableOpacity>
            <CustomButton
              text={'Login'}
              bgColor={COLORS.red}
              marginTop={10}
              borderRadius={10}
              onPress={() => nav.navigate('UserNavigation')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 200,
              }}>
              <TextView
                label={"Don't you have an account?"}
                color={COLORS.white}
                fontSize={13}
              />
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <TextView
                  label={'  Signup'}
                  color={COLORS.white}
                  fontSize={13}
                  fontWeight={700}

                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              backgroundColor: 'black',
              opacity: 0.8,
            }}>
            <View
              style={{
                height: 300,
                width: 300,
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: 'red',
                borderRadius: 10,
              }}>
              <TextView
                label={'Agreement'}
                marginTop={10}
                alignSelf={'center'}
                fontWeight={800}
              />
              <TextView
                label={
                  'Suspisse ex ligula, auctor in sed semper egestas quis, sagittis.'
                }
                marginTop={5}
                alignSelf={'center'}
                fontSize={18}
              />
              <TextView
                label={'I have read and agreed with:'}
                marginTop={10}
                alignSelf={'center'}
              />
              <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <View style={{}}>
                  <CheckBox
                    disabled={false}
                    value={state}
                    onValueChange={() => setState(!state)}
                  />
                  <CheckBox
                    disabled={false}
                    value={state1}
                    onValueChange={() => setState1(!state1)}
                  />
                </View>

                <View style={{}}>
                  <TextView label={'Terms & Conditions'} marginTop={2} />
                  <TextView label={'Privacy Policy'} marginTop={2} />
                </View>
              </View>

              <CustomButton
                text={'Accept'}
                bgColor={COLORS.red}
                width={'80%'}
                marginTop={30}
                onPress={() => nav.navigate('Signup')}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default LoginEmail;
