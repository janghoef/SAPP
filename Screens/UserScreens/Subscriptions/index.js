import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {Bg} from '../../../constant/IMAGES';
import Homeheader from '../../../Components/Homeheader';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomButton from '../../../Components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Subscriptions = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const nav = useNavigation();
  return (
    <>
      <ImageBackground source={Bg} style={{height: '100%'}}>
        <Homeheader />
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            marginTop: 30,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <TextView
                label={'Subscriptions'}
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
                <TextView label={'Basic'} fontSize={30} fontWeight={800} />
                <View
                  style={{
                    width: '30%',
                    borderWidth: 1,
                    borderColor: COLORS.grey6,
                    marginTop: 5,
                  }}
                />
                <TextView label={'$50.00'} fontWeight={700} marginTop={5} />
                <View style={{width: '90%'}}>
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
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>

              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 15,
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
                <View style={{width: '90%'}}>
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
                  marginTop: 15,
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
                <View style={{width: '90%'}}>
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
                height: '32%',
                paddingHorizontal: 10,
              }}>
              <TextView
                label={'Thank you'}
                alignSelf={'center'}
                marginTop={10}
                fontSize={18}
              />
              <TextView
                label={'for The Subscription!'}
                alignSelf={'center'}
                fontSize={18}
              />
              <TextView
                label={
                  'Proin eget velit ut neque interdum consequat. Aliquam tincidunt tempus dolor, ac efficitur velit lacinia ut. In malesuada magna tristique mauris porta luctus.'
                }
                fontSize={14}
                textAlign={'center'}
                marginTop={5}
              />
              <CustomButton
                text={'Done'}
                bgColor={COLORS.red}
                width={'40%'}
                borderRadius={10}
                marginTop={20}
                onPress={() => nav.navigate('Subscribed')}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default Subscriptions;
