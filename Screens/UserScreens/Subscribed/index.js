import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Bg, check, renew } from '../../../constant/IMAGES';
import Homeheader from '../../../Components/Homeheader';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const subscribed = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation();
  return (
    <>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <Homeheader />
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            marginTop: 30,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ width: '90%', alignSelf: 'center' }}>
              <View
                style={{
                  width: '100%',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 30,
                  height: 210,
                  backgroundColor: '#001731',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    width: '90%',
                    alignSelf: 'center',
                  }}>
                  <TextView label={'Basic Plan'} color={COLORS.white} />
                  <TextView label={'$50.00'} color={COLORS.white} />
                </View>
                <View
                  style={{
                    width: '90%',
                    borderWidth: 1,
                    alignSelf: 'center',
                    borderColor: COLORS.grey6,
                    marginTop: 20,
                  }}
                />
                <View
                  style={{
                    width: '90%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => nav.navigate('Subscriptions')}
                    style={{
                      backgroundColor: 'white',
                      height: 50,
                      width: '45%',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 8,
                    }}>
                    <Image source={renew} style={{height:35,width:25}}/>
                    <View>
                      <TextView label={'  RENEWAL'} fontSize={15} />
                      <TextView
                        label={'  01.05.2024'}
                        color={COLORS.red}
                        fontSize={15}
                      />
                    </View>
                  </TouchableOpacity>

                  <View
                    style={{
                      backgroundColor: 'white',
                      height: 50,
                      width: '45%',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 8,
                    }}>
                    <Image source={check} />
                    <View>
                      <TextView label={'  STATUS'} fontSize={15} />
                      <TextView
                        label={'  Active'}
                        color={COLORS.red}
                        fontSize={15}
                      />
                    </View>
                  </View>
                </View>
                <CustomButton
                  text={'CANCEL SUBSCRIPTION'}
                  bgColor={COLORS.red}
                  marginTop={20}
                  width={'95%'}
                  borderRadius={10}
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>

              <TextView
                label={'Upgrade Subscriptions'}
                fontWeight={700}
                alignSelf={'center'}
                marginTop={10}
                fontSize={18}
              />

              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 10,
                  height: 270,
                }}>
                <TextView label={'Advance'} fontSize={30} fontWeight={800} />
                <View
                  style={{
                    width: '30%',
                    borderWidth: 1,
                    borderColor: COLORS.grey6,
                    marginTop: 5,
                  }}
                />
                <TextView label={'$150.00'} fontWeight={700} marginTop={5} />
                <View style={{ width: '90%' }}>
                  <TextView
                    label={
                      'Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tristique, molestie enim congue commodo magna dictum ultrices suscipit senectus, taciti fermentum libero odio etiam luctus iaculis vivamus.'
                    }
                    fontSize={14}
                    alignSelf={'center'}
                  />
                </View>
                <CustomButton
                  text={'Buy Now'}
                  bgColor={COLORS.red}
                  width={'60%'}
                  borderRadius={10}
                  marginTop={20}
                />
              </View>

              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 10,
                  height: 270,
                  marginBottom: '40%',
                }}>
                <TextView label={'Premium'} fontSize={30} fontWeight={800} />
                <View
                  style={{
                    width: '30%',
                    borderWidth: 1,
                    borderColor: COLORS.grey6,
                    marginTop: 5,
                  }}
                />
                <TextView label={'$250.00'} fontWeight={700} marginTop={5} />
                <View style={{ width: '90%' }}>
                  <TextView
                    label={
                      'Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet tristique, molestie enim congue commodo magna dictum ultrices suscipit senectus, taciti fermentum libero odio etiam luctus iaculis vivamus.'
                    }
                    fontSize={14}
                    alignSelf={'center'}
                  />
                </View>
                <CustomButton
                  text={'Buy Now'}
                  bgColor={COLORS.red}
                  width={'60%'}
                  borderRadius={10}
                  marginTop={20}
                />
              </View>
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
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                width: '90%',
                height: '30%',
              }}>
              <View style={{ width: '90%', alignSelf: 'center' }}>
                <TextView
                  label={'Cancel Subscription?'}
                  marginTop={10}
                  fontSize={18}
                />

                <TextView
                  label={
                    'Your Subscription will be canceled at the end of your billing period on Jan 05, 2024. You can change your mind any time before this date. '
                  }
                  fontSize={14}
                  textAlign={'center'}
                  marginTop={5}
                />
                <View style={{ alignSelf: 'flex-end', width: '60%' }}>
                  <CustomButton
                    text={'Cancel Subscription'}
                    bgColor={COLORS.red}
                    width={'100%'}
                    borderRadius={10}
                    marginTop={20}
                    height={40}
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                  <CustomButton
                    text={'Keep Subscription'}
                    fontColor={COLORS.red}
                    bgColor={COLORS.white}
                    width={'100%'}
                    borderRadius={10}
                    height={40}
                    onPress={() => setModalVisible(!modalVisible)}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default subscribed;
