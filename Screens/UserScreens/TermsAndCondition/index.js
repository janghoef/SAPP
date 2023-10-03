import React from 'react';
import { View, ImageBackground, Image, ScrollView } from 'react-native';
import { Bg, redDot } from '../../../constant/IMAGES';
import Header from '../../../Components/Header';
import TextView from '../../../Components/Textview';
import COLORS from '../../../constant/COLOR';

const TermsAndCondition = () => {
  return (
    <ImageBackground source={Bg} style={{ height: '100%' }}>
      <Header title={'Terms & Conditions'} />
      <View style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <View
              style={{
                height: 40,
                width: 240,
                marginTop: 20,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: COLORS.grey6,
              }}>
              <TextView
                label={'Last Uptade : 27 / 09 / 2023'}
                fontSize={14}
                color={COLORS.black}
              />
            </View>
            <TextView
              label={'Lorem ipsum'}
              color={COLORS.red}
              fontSize={15}
              marginTop={7}
            />
            <TextView
              label={
                'Dolor sit amet consectetur adipiscing elit odio, mattis quam tortor taciti aenean luctus nullam enim, dui praesent ad dapibus tempus natoque a. Rhoncus praesent massa torquent malesuada maecenas arcu curae, porta pulvinar potenti at mus sem, vel purus proin eleifend nisi dictum. Egestas tortor blandit vestibulum tempus dignissim cras placerat, ligula ridiculus sollicitudin interdum quisque facilisis, suscipit tempor justo tristique et mattis.'
              }
              fontSize={14}
            />
            <TextView
              label={'Nisl imperdiet'}
              color={COLORS.red}
              fontSize={15}
              marginTop={7}
            />
            <TextView
              label={
                'Donec nascetur feugiat massa vehicula elementum nullam purus morbi, sagittis et penatibus taciti vitae lobortis facilisis maecenas gravida, venenatis sed pellentesque suspendisse sociis magna class nibh volutpat.'
              }
              fontSize={14}
            />
            <TextView
              label={
                'Sodales leo arcu ornare eget torquent dictumst, id morbi fringilla ultricies suscipit, nulla sapien a aliquet tempor. Tristique non eros a felis quam convallis nascetur montes auctor hendrerit, mollis metus sodales ligula magnis condimentum et arcu nam. Lorem ipsum dolor sit amet consectetur adipiscing elit odio, mattis quam tortor taciti aenean luctus nullam enim, dui praesent ad dapibus tempus natoque a. Rhoncus praesent massa torquent malesuada maecenas arcu curae, porta pulvinar potenti at mus sem, vel purus proin eleifend nisi dictum.'
              }
              fontSize={14}
              marginTop={10}
            />
            <TextView
              label={
                'Sed auctor ipsum a mi auctor tincidunt. Mauris ultricies fermentum ipsum, sed vestibulum eros molestie eu. Sed ultricies ante sed lacus eleifend, non eleifend nisi interdum. Proin venenatis in metus id tincidunt.'
              }
              marginTop={20}
              fontSize={14}
            />

            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                alignSelf: 'center',
              }}>
              <Image source={redDot} />
              <TextView
                label={
                  '  Sed auctor ipsum a mi auctor tincidunt. Mauris ultricies fermentum ipsum, sed vestibulum eros molestie eu.'
                }
                fontSize={14}
                marginTop={-4}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignSelf: 'center',
              }}>
              <Image source={redDot} />
              <TextView
                label={
                  '  Sed auctor ipsum a mi auctor tincidunt. Mauris ultricies fermentum ipsum, sed vestibulum eros molestie eu.'
                }
                fontSize={14}
                marginTop={-4}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                alignSelf: 'center',
                marginBottom: 80
              }}>
              <Image source={redDot} />
              <TextView
                label={
                  '  Sed auctor ipsum a mi auctor tincidunt. Mauris ultricies fermentum ipsum, sed vestibulum eros molestie eu.'
                }
                fontSize={14}
                marginTop={-4}
              />
            </View>

          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default TermsAndCondition;
