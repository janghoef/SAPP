import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  ApplePay,
  Bg,
  Default,
  GooglePay,
  Master,
  Options,
  PayPal,
  Visa,
  plus,
} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import { useNavigation } from '@react-navigation/native';

const PaymentSettings = () => {
  const nav = useNavigation();
  return (
    <ImageBackground source={Bg} style={{ height: '100%' }}>
      <Header title={'Payment Management'} />
      <View style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <TextView label={'Payment Management'} fontWeight={700} />
            <TouchableOpacity onPress={() => nav.navigate('AddPaymentMethod')}>
              <Image source={plus} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              padding: 3,
              borderRadius: 10,
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: 185,
                justifyContent: 'space-between',
              }}>
              <Image
                source={Master}
                resizeMode="contain"
                style={{ marginTop: 5 }}
              />
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <TextView label={'Master'} />
                  <TextView
                    label={'************'}
                    fontSize={14}
                    color={COLORS.grey6}
                  />
                </View>
                <View>
                  <Image source={Default} style={{ height: 15, width: 62 }} />
                  <TextView label={'  123'} color={COLORS.grey6} />
                </View>
              </View>
            </View>
            <Image source={Options} style={{ marginTop: 18, right: 10 }} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              padding: 3,
              borderRadius: 10,
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: 160,
                justifyContent: 'space-between',
              }}>
              <Image
                source={Visa}
                resizeMode="contain"
                style={{ marginTop: 5 }}
              />
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <TextView label={'Visa'} />
                  <TextView
                    label={'************'}
                    fontSize={14}
                    color={COLORS.grey6}
                  />
                </View>
                <View>
                  <TextView
                    label={'  123'}
                    color={COLORS.grey6}
                    marginTop={8}
                  />
                </View>
              </View>
            </View>
            <Image source={Options} style={{ marginTop: 18, right: 10 }} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              padding: 3,
              borderRadius: 10,
              marginTop: 20,
              height: 50,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: 100,
                justifyContent: 'space-between',
              }}>
              <Image
                source={PayPal}
                resizeMode="contain"
                style={{ marginTop: 5 }}
              />
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <TextView label={'Paypal'} marginTop={3} />
                </View>
              </View>
            </View>
            <Image source={Options} style={{ marginTop: 18, right: 10 }} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              padding: 3,
              borderRadius: 10,
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: 160,
                justifyContent: 'space-between',
              }}>
              <Image
                source={GooglePay}
                resizeMode="contain"
                style={{ marginTop: 5 }}
              />
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <TextView label={'  Googlepay'} />
                  <TextView
                    label={'  ************'}
                    fontSize={14}
                    color={COLORS.grey6}
                  />
                </View>
                <View>
                  <TextView
                    label={'  123'}
                    color={COLORS.grey6}
                    marginTop={8}
                  />
                </View>
              </View>
            </View>
            <Image source={Options} style={{ marginTop: 18, right: 10 }} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderWidth: 1,
              padding: 3,
              borderRadius: 10,
              marginTop: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: 160,
                justifyContent: 'space-between',
              }}>
              <Image
                source={ApplePay}
                resizeMode="contain"
                style={{ marginTop: 5 }}
              />
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <TextView label={'  Applepay'} />
                  <TextView
                    label={'  ************'}
                    fontSize={14}
                    color={COLORS.grey6}
                  />
                </View>
                <View>
                  <TextView
                    label={'  123'}
                    color={COLORS.grey6}
                    marginTop={8}
                  />
                </View>
              </View>
            </View>
            <Image source={Options} style={{ marginTop: 18, right: 10 }} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PaymentSettings;
