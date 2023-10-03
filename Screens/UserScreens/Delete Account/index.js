import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Bg, DownArr, blackeye, exclamation} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import CustomInput from '../../../Components/CustomInput';
import COLORS from '../../../constant/COLOR';
import CustomButton from '../../../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import TextView from '../../../Components/Textview';
import DropDownPicker from 'react-native-dropdown-picker';

const DeleteAccount = () => {
  const nav = useNavigation();
  const [secure, setSecure] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

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
    <>
      <ImageBackground source={Bg} style={{height: '100%'}}>
        <Header title={'Delete Account'} />
        <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <View style={{marginTop: 20, flexDirection: 'row'}}>
                <Image source={exclamation} />
                <TextView label={'  You are about to delete your account'} />
              </View>
              <TextView
                label={
                  'We are sad to see you go! Please make sure you have no outstanding bookings before deleting your account. Any bookings previously booked with Payment Cards may still be processed after your account is deleted.'
                }
                marginTop={3}
                fontSize={15}
              />
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  marginTop: 15,
                  borderColor: COLORS.grey6,
                  borderStyle: 'dashed',
                }}
              />
              <TextView label={'Verification'} fontSize={20} marginTop={5} />
              <CustomInput
                placeholder={'Email Address'}
                placeholderTextColor={COLORS.grey6}
                borderColor={COLORS.black}
                backgroundColor={COLORS.white}
                borderRadius={10}
              />
              <CustomInput
                placeholder={'Current Password'}
                placeholderTextColor={COLORS.grey6}
                borderColor={COLORS.black}
                backgroundColor={COLORS.white}
                borderRadius={10}
                secure={true}
                secureTextEntry={secure}
                setSecureTextEntry={setSecure}
                rightImg2={blackeye}
              />
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  marginTop: 15,
                  borderColor: COLORS.black,
                  borderStyle: 'dashed',
                }}
              />
              <TextView
                label={'Additional Information'}
                fontSize={20}
                marginTop={5}
              />
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder='Please select a reason for leaving'
                placeholderStyle={{color:COLORS.grey6}}
                style={{marginTop:10}}
              />
              <TextInput
                placeholder="Description"
                multiline={true}
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.black,
                  borderRadius: 10,
                  height: 130,
                  marginTop:10,
                  textAlignVertical:'top',
                  padding:10
                }}
              />

              <CustomButton
                text={'Save'}
                bgColor={COLORS.red}
                width={'100%'}
                marginTop={20}
                borderRadius={10}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </ScrollView>
        </View>
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
                height: 250,
                width: 300,
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: 'red',
                borderRadius: 10,
                padding: 20,
              }}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Image
                  source={exclamation}
                  style={{height: 25, width: 28, resizeMode: 'contain'}}
                />
                <TextView
                  label={' Are You Sure?'}
                  fontWeight={400}
                  fontSize={20}
                />
              </View>
              <TextView
                label={
                  'This is an irreversible action. You will no longer be able to access this account and the data associated with it. This email can be used again to sign up if you decide to come back.'
                }
                marginTop={5}
                alignSelf={'center'}
                fontSize={15}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: 120,
                  justifyContent: 'space-between',
                  alignSelf: 'flex-end',
                  marginTop: 40,
                }}>
                <TextView label={'CANCEL'} fontSize={14} />

                <TouchableOpacity onPress={() => nav.navigate('Login')}>
                  <TextView label={'DELETE'} fontSize={14} color={COLORS.red} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default DeleteAccount;
