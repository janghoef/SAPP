import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { homeicon, settingicon, whitepin } from '../../../constant/IMAGES';
import Home from '../../../Screens/UserScreens/Home';
import Setting from '../../../Screens/UserScreens/Setting';
import UserLocation from '../../../Screens/UserScreens/UserLocation';

const BottomNav = () => {
  const Tab = createBottomTabNavigator();

  const screenOptions = route => ({
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 92,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: '#001731',
    },
  });

  const ActiveIcon = ({ img }) => (
    <View style={{
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      borderWidth: 1,
      borderColor: 'white',
    }}>
      <Image style={[styles.ActiveImage]} source={img} resizeMode={'contain'} />
    </View>
  );

  const UnActiveIcon = ({ img }) => (
    <View
      style={{
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'red'

      }}>
      <Image style={styles.UnActiveImage} source={img} resizeMode={'contain'} />
    </View>
  );

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions} >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {!focused ? (
                  <View style={styles.View}>
                    <ActiveIcon img={homeicon} />
                  </View>
                ) : (
                  <UnActiveIcon img={homeicon} />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="UserLocation"
        component={UserLocation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {!focused ? (
                  <View style={styles.View}>
                    <ActiveIcon img={whitepin} />
                  </View>
                ) : (
                  <UnActiveIcon img={whitepin} />
                )}
              </>
            );
          },
          tabBarStyle: {
            display: "none"
          
          }
        }}
      />
      <Tab.Screen
        name="setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {!focused ? (
                  <View style={styles.View}>
                    <ActiveIcon img={settingicon} />
                  </View>
                ) : (
                  <UnActiveIcon img={settingicon} />
                )}
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  ActiveImage: {
    height: 20,
    width: 20,
  },
  UnActiveImage: {
    height: 20,
    width: 20,
  },
  View: {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 999,
  },
});
