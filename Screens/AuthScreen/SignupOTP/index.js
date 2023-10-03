import {
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Bg,
  Centerlogo,
} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignupOTP = () => {
  const nav = useNavigation();
  return (
    <>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <ScrollView>
          <Header />
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <Image source={Centerlogo} style={{ alignSelf: 'center' }} />
            <TextView
              label={'Enter OTP'}
              color={COLORS.white}
              fontWeight={700}
              alignSelf={'center'}
              marginTop={15}
            />
            <TextView
              label={'Please enter your OTP. You will receive a '}
              color={COLORS.white}
              fontSize={16}
              alignSelf={'center'}
              marginTop={10}
            />
            <TextView
              label={'OTP via registered email.'}
              color={COLORS.white}
              fontSize={16}
              alignSelf={'center'}
            />
            <View
              style={{
                marginTop: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <CustomInput
                borderRadius={10}
                backgroundColor={COLORS.gray}
                borderColor={COLORS.gray2}
                placeholder={'5'}
                placeholderTextColor={COLORS.white}
                width={60}
                fontSize={30}
                textAlign={'center'}
              />
              <CustomInput
                borderRadius={10}
                backgroundColor={COLORS.gray}
                borderColor={COLORS.gray2}
                placeholder={'4'}
                placeholderTextColor={COLORS.white}
                width={60}
                fontSize={30}
                textAlign={'center'}
              />
              <CustomInput
                borderRadius={10}
                backgroundColor={COLORS.gray}
                borderColor={COLORS.gray2}
                placeholder={''}
                placeholderTextColor={COLORS.white}
                width={60}
                fontSize={30}
                textAlign={'center'}
              />
              <CustomInput
                borderRadius={10}
                backgroundColor={COLORS.gray}
                borderColor={COLORS.gray2}
                placeholder={''}
                placeholderTextColor={COLORS.white}
                width={60}
                fontSize={30}
                textAlign={'center'}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginTop: 30,
              }}>
              <TextView
                label={"Don't receive your code?"}
                color={COLORS.white}
                fontSize={13}
              />
              <TouchableOpacity >
                <TextView
                  label={'  Resend'}
                  color={COLORS.red}
                  fontSize={13}
                  fontWeight={700}
                />
              </TouchableOpacity>
            </View>

            <CustomButton
              text={'Submit'}
              bgColor={COLORS.red}
              marginTop={10}
              borderRadius={10}
              onPress={() => nav.navigate('Location')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default SignupOTP;