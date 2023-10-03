import {View, Text, Modal, TouchableWithoutFeedback, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import TextView from '../Textview';
import COLORS from '../../constant/COLOR';
import CustomButton from '../CustomButton';
import {silent} from '../../constant/IMAGES';

const QuietModal = ({modalVisible, setModalVisible}) => {
  const toggleMode = () => {
    setModalVisible(!modalVisible);
    // Depending on your use case, you can also toggle the mode state here.
  };
  return (
    <Modal transparent={true} visible={modalVisible} animationType="fade">
      <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
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
              width: '80%',
              height: '35%',
              borderWidth: 2,
              borderColor: COLORS.red,
            }}>
            <View style={{width: '90%', alignSelf: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: 30,
                }}>
                <Image source={silent} />
                <TextView
                  label={' Quiet Mode On'}
                  fontWeight={700}
                  fontSize={18}
                />
              </View>

              <TextView
                label={
                  'All app functionalities are put on pause when this is enabled. By tapping the quiet mode off button, you can switch off the quiet mode. '
                }
                fontSize={14}
                textAlign={'center'}
                marginTop={5}
              />

              <CustomButton
                text={'OK'}
                bgColor={COLORS.red}
                width={'100%'}
                borderRadius={10}
                height={40}
                marginTop={40}
                onPress={toggleMode}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default QuietModal;
