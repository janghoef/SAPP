import {
  View,
  Text,
  ImageBackground,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {
  Bg,
  call,
  call2,
  message,
  message2,
  notification2,
  notifications,
  panic,
  panicbutton,
  panicsetting,
  securityDisable,
  settingicon,
  text,
  text2,
  whitepin,
} from '../../../constant/IMAGES';
import Homeheader from '../../../Components/Homeheader';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';
import {useNavigation} from '@react-navigation/native';
import QuietModal from '../../../Components/QuietModal';


const Home = () => {
  const nav = useNavigation();
  const [state, setState] = useState();
  const [state1, setState1] = useState();
  const [state2, setState2] = useState();
  const [state3, setState3] = useState();
  const [state4, setState4] = useState();

  const toggal = () => {
    if (ToggleMood) {
      setState(prev => !prev);
    }
  };
  const press = () => {
    if (ToggleMood) {
      setState1(!state1);
    }
  };
  const press1 = () => {
    if (ToggleMood) {
      setState2(!state2);
    }
  };
  const press2 = () => {
    if (ToggleMood) {
      setState3(!state3);
    }
  };
  const press3 = () => {
    if (ToggleMood) {
      setState4(!state4);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [ToggleMood, setToggleMood] = useState(true);

  const toggleMode = () => {
    if (ToggleMood) {
      setModalVisible(!modalVisible);
    }
    setToggleMood(!ToggleMood);
  };

  return (
    <>
      <ImageBackground source={Bg} style={{height: '100%'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <Homeheader />
          <View style={{width: '90%', alignSelf: 'center'}}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'white',
                backgroundColor: '#001731',
                height: 40,
                justifyContent: 'center',
                borderRadius: 10,
                marginTop: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={whitepin} style={{height: 16, width: 12}} />

                  <TextView
                    label={
                      state
                        ? ' 25 Union Square W, New York, NY 10003, USA'
                        : '   47 W 13th St, New York, NY 10011, USA'
                    }
                    color={COLORS.white}
                    fontSize={12}
                  />
                </View>
                <Switch
                  trackColor={{false: 'grey', true: 'green'}}
                  onValueChange={toggal}
                  thumbColor={state ? 'black' : 'white'}
                  value={state}
                  style={{alignSelf: 'flex-start'}}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              height:491,
              backgroundColor: 'white',
              marginTop: 90,
            }}>
            <TouchableOpacity
              onPress={press}
              style={{
                marginTop: -70,
                height: 150,
                width: 150,
                borderRadius: 70,
                marginBottom: 30,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              {state1 === true ? (
                <Image
                  source={panicbutton}
                  style={{
                    height: 220,
                    width: 220,
                    marginTop: -9,
                  }}
                />
              ) : (
                <Image
                  source={panic}
                  style={{
                    height: 200,
                    width: 200,
                    marginBottom: 11,
                  }}
                />
              )}
            </TouchableOpacity>

            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                bottom: 25,
              }}>
              <TouchableOpacity
                onPress={toggleMode}
                style={{
                  backgroundColor: ToggleMood ? COLORS.grey7 : 'red',
                  width: 160,
                  height: 35,
                  borderRadius: 5,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Image
                  source={ToggleMood ? securityDisable : notification2}
                  style={{resizeMode: 'contain', height: 20}}
                />

                <TextView
                  label={ToggleMood ? '  Quiet Mode ON' : '  Quiet Mode OFF'}
                  color={'white'}
                  fontSize={13}
                  marginRight={10}
                  
                />
              </TouchableOpacity>

              <View style={{alignSelf: 'center', width: '85%'}}>
                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    left:10
                  }}>
                  <TouchableOpacity onPress={press1}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={state2 ? text2 : text}
                        style={{height: 130, width: 130}}
                      />
                      <TouchableOpacity
                        style={{height: 20, width: 20, right: 35, top: 15}}
                        onPress={() => nav.navigate('QuickExit')}>
                        <Image
                          source={settingicon}
                          style={{height: 20, width: 20}}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={press2}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={state3 ? call2 : call}
                        style={{height: 130, width: 130}}
                      />
                      <TouchableOpacity
                        style={{height: 20, width: 20, right: 35, top: 15}}
                        onPress={() => nav.navigate('FakeCall')}>
                        <Image
                          source={settingicon}
                          style={{height: 20, width: 20}}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    left:10
                  }}>
                  <TouchableOpacity onPress={press3}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={state4 ? message2 : message}
                        style={{height: 130, width: 130}}
                      />
                      <TouchableOpacity
                        style={{height: 20, width: 20, right: 35, top: 15}}
                        onPress={() => nav.navigate('Emergency')}>
                        <Image
                          source={settingicon}
                          style={{height: 20, width: 20}}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => nav.navigate('Panic')}>
                    <Image
                      source={panicsetting}
                      style={{height: 130, width: 130}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>

      <QuietModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};
export default Home;
