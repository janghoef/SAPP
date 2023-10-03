import {
  View,
  ImageBackground,
  Image,
  Animated,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Appearance,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {
  Centerlogo,
  Loginbg,
  apple,
  email,
  facebook,
  google,
} from '../../../constant/IMAGES';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomButton from '../../../Components/CustomButton';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

const Login = () => {


  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation();
  const [state, setState] = useState(false);
  const [state1, setState1] = useState(false);
  const box = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(box, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <>
      <ImageBackground source={Loginbg} style={{height: '100%'}}>
        <Animated.View style={{bottom: box}}>
          <View>
            <Image
              source={Centerlogo}
              style={{alignSelf: 'center', marginTop: 100}}
            />
            <TextView
              label={'Login'}
              color={COLORS.white}
              fontWeight={700}
              marginTop={20}
              alignSelf={'center'}
            />
            <TouchableOpacity
              onPress={() => nav.navigate('LoginEmail')}
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: '90%',
                alignSelf: 'center',
                height: '8%',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <Image source={email} style={{height: 15, width: 19}} />
              <TextView label={'    Login with Email'} color={COLORS.red} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => nav.navigate('UserNavigation')}
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: '90%',
                alignSelf: 'center',
                height: '8%',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image source={facebook} style={{height: 23, width: 12}} />
              <TextView label={'    Login with Facebook'} color={COLORS.red} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => nav.navigate('UserNavigation')}
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: '90%',
                alignSelf: 'center',
                height: '8%',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image source={google} style={{height: 20, width: 20}} />
              <TextView label={'    Login with Google'} color={COLORS.red} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => nav.navigate('UserNavigation')}
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: '90%',
                alignSelf: 'center',
                height: '8%',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image source={apple} style={{height: 22, width: 18}} />
              <TextView label={'    Login with Apple'} color={COLORS.red} />
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 90, alignSelf: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <TextView
                label={"Don't have an account ?"}
                color={COLORS.white}
              />
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <TextView
                  label={'  Signup'}
                  color={COLORS.white}
                  fontWeight={800}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </ImageBackground>

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <View
              style={{
                height: 320,
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
              <View
                style={{
                  flexDirection: 'row',
                  width: '75%',
                  alignSelf: 'center',
                }}>
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
                borderRadius={10}
                onPress={() => nav.navigate('Signup')}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default Login;
