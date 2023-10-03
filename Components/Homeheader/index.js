import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../constant/COLOR';
import {Profile, menu, notifications} from '../../constant/IMAGES';
import TextView from '../Textview';
import SideModal from '../SideModal';

const Homeheader = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
          width: '90%',
          alignSelf: 'center',
          alignItems:'center'
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '45%',
            justifyContent: 'space-between',
            alignItems:'center'
          }}>
          <Image source={Profile}  style={{height:50,width:50}}/>
          <View>
            <TextView label={'Welcome'} color={COLORS.white} fontSize={14} />
            <TextView
              label={'Sarah Kevin'}
              color={COLORS.white}
              marginTop={-3}
            />
          </View>
        </View>
        <View
          style={{
            width: '18%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image source={notifications} style={{height:20 ,width:20, resizeMode:'contain'}} />
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Image source={menu}  style={{height:25 ,width:25, resizeMode:'contain'}}/>
          </TouchableOpacity>
        </View>
      </View>
      <SideModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default Homeheader;
