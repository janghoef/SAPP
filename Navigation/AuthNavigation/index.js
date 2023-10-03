import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../../Screens/AuthScreen/Welcome';
import Login from '../../Screens/AuthScreen/Login';
import Signup from '../../Screens/AuthScreen/Signup';
import LoginEmail from '../../Screens/AuthScreen/LoginEmail';
import ForgotPassword from '../../Screens/AuthScreen/ForgotPassword';
import OTP from '../../Screens/AuthScreen/OTP';
import ResetPassword from '../../Screens/AuthScreen/ResetPassword';
import SignupOTP from '../../Screens/AuthScreen/SignupOTP';
import Location from '../../Screens/AuthScreen/Location';
import UserNavigation from '../UserNavigation';

const AuthNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="LoginEmail" component={LoginEmail} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="SignupOTP" component={SignupOTP} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="UserNavigation" component={UserNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
