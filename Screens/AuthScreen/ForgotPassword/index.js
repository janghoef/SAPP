import {
  View,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import {
  Bg,
  Centerlogo,
  whiteemail,
} from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import CustomInput from '../../../Components/CustomInput';
import CustomButton from '../../../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {

  const nav = useNavigation();
  return (
    <>
      <ImageBackground source={Bg} style={{ height: '100%' }}>
        <ScrollView>
          <Header />
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <Image source={Centerlogo} style={{ alignSelf: 'center' }} />
            <TextView
              label={'Forgot Password'}
              color={COLORS.white}
              fontWeight={700}
              alignSelf={'center'}
              marginTop={15}
            />
            <TextView label={'Please enter your email address. You will receive an OTP to create a new password.'} color={COLORS.white} fontSize={16} alignSelf={'center'} marginTop={10} />
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
            </View>
            <CustomButton
              text={'Submit'}
              bgColor={COLORS.red}
              marginTop={10}
              borderRadius={10}
              onPress={() => nav.navigate('OTP')}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default ForgotPassword;