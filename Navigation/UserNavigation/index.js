import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import EditProfile from '../../Screens/UserScreens/EditProfile';
import ChangePassword from '../../Screens/UserScreens/ChangePassword';
import DeleteAccount from '../../Screens/UserScreens/Delete Account';
import PaymentSettings from '../../Screens/UserScreens/PaymentSettings';
import AddPaymentMethod from '../../Screens/UserScreens/AddPaymentMethod';
import AddNewCard from '../../Screens/UserScreens/AddNewCard';
import Support from '../../Screens/UserScreens/Support';
import TermsAndCondition from '../../Screens/UserScreens/TermsAndCondition';
import Subscriptions from '../../Screens/UserScreens/Subscriptions';
import AboutApp from '../../Screens/UserScreens/AboutApp';
import PrivacyPolicey from '../../Screens/UserScreens/PrivacyPolicey';
import subscribed from '../../Screens/UserScreens/Subscribed';
import QuickExit from '../../Screens/UserScreens/QuickExit';
import FakeCall from '../../Screens/UserScreens/FakeCall';
import FakeCallGenerator from '../../Screens/UserScreens/FakeCallGenerator';
import Emergency from '../../Screens/UserScreens/Emergency';
import Panic from '../../Screens/UserScreens/Panic';
import UserLocation from '../../Screens/UserScreens/UserLocation';

const UserNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="BottomNav"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bottomnav" component={BottomNav} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
      <Stack.Screen name="PaymentSettings" component={PaymentSettings} />
      <Stack.Screen name="AddPaymentMethod" component={AddPaymentMethod} />
      <Stack.Screen name="AddNewCard" component={AddNewCard} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
      <Stack.Screen name="Subscriptions" component={Subscriptions} />
      <Stack.Screen name="AboutApp" component={AboutApp} />
      <Stack.Screen name="PrivacyPolicey" component={PrivacyPolicey} />
      <Stack.Screen name="Subscribed" component={subscribed} />
      <Stack.Screen name="QuickExit" component={QuickExit} />
      <Stack.Screen name="FakeCall" component={FakeCall} />
      <Stack.Screen name="FakeCallGenerator" component={FakeCallGenerator} />
      <Stack.Screen name="Emergency" component={Emergency} />
      <Stack.Screen name="Panic" component={Panic} />
      <Stack.Screen name="UserLocation" component={UserLocation} />
    </Stack.Navigator>
  );
};

export default UserNavigation;
