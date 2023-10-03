import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  Switch,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import TextView from '../Textview';
import COLORS from '../../constant/COLOR';
import CustomButton from '../CustomButton';
import {Bigprofile, Pan} from '../../constant/IMAGES';
// import {launchImageLibrary} from 'react-native-image-picker';

const SideModal = ({modalVisible, setModalVisible}) => {
  const [state, setState] = useState(false);
  const toggleSwitch = () => setState(previousState => !previousState);

  // const [image, setImage] = useState([]);
  // const press = useCallback(() => {
  //   let options = {
  //     includeBase64: false,
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  //   launchImageLibrary(options, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.errorCode) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else {
  //       setImage(prev => [...prev, response.assets[0]]);
  //     }
  //   });
  // });

  const nav = useNavigation();
  return (
    <Modal transparent={true} visible={modalVisible} animationType="fade">
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
        <View
          style={{
            justifyContent: 'center',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: '93%',
              width: '80%',
              alignSelf: 'flex-end',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
            }}>
            <View style={{width: '80%', alignSelf: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={Bigprofile} />
                  <TouchableOpacity onPress={()=>nav.navigate('EditProfile')}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 30,
                        width: 30,
                        borderRadius: 20,
                        backgroundColor: COLORS.red,
                        borderWidth: 1,
                        borderColor: 'white',
                        right: 30,
                      }}>
                      <Image
                        source={Pan}
                        style={{height: 13, width: 13, resizeMode: 'cover'}}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{right: 20}}>
                  <TextView label={'Sarah Kevin'} />
                  <TextView label={'user@email.com'} fontSize={15} />
                  <View
                    style={{
                      flexDirection: 'row',
                      right: 10,
                      alignItems: 'center',
                    }}>
                    <Switch
                      trackColor={{false: 'grey', true: '#1FD52C'}}
                      onValueChange={toggleSwitch}
                      thumbColor={state ? 'black' : 'white'}
                      value={state}
                      style={{alignSelf: 'flex-start'}}
                    />
                    <TextView
                      label={state ? 'Do Not Distrub' : null}
                      fontSize={13}
                    />
                  </View>
                </View>
              </View>

              <TouchableOpacity onPress={() => nav.navigate('Home')}>
                <TextView label={'Home'} marginTop={20} fontSize={20} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => nav.navigate('setting')}>
                <TextView label={'Settings'} marginTop={10} fontSize={20} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => nav.navigate('Subscriptions')}>
                <TextView
                  label={'Subscriptions'}
                  marginTop={10}
                  fontSize={20}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => nav.navigate('AboutApp')}>
                <TextView label={'About App'} marginTop={10} fontSize={20} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => nav.navigate('TermsAndCondition')}>
                <TextView
                  label={'Terms & Conditions'}
                  marginTop={10}
                  fontSize={20}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => nav.navigate('PrivacyPolicey')}>
                <TextView
                  label={'Privacy Policey'}
                  marginTop={10}
                  fontSize={20}
                />
              </TouchableOpacity>

              <CustomButton
                text={'LOGOUT'}
                bgColor={'red'}
                width={150}
                borderRadius={10}
                marginTop={30}
                onPress={() => nav.navigate('LoginEmail')}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SideModal;
