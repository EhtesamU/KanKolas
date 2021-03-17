import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './src/screens/Login/LoginScreen';
import SignupScreen from './src/screens/Login/SignupScreen';
import StudentTabsScreen from './src/navigation/StudentTabs';
import TutorTabsScreen from './src/navigation/TutorTabs';
import SignupActivationScreen from './src/screens/Login/SignupActivation';
import ForgotPasswordScreen from './src/screens/Login/ForgotPassword';
import {Provider as AuthProvider} from './src/context/AuthContext';
import ResolveAuthScreen from './src/screens/Login/ResolveAuthScreen';
import MessageScreen from './src/screens/Student/MessageScreen';
import MessageScreenTutor from './src/screens/Tutor/MessageScreenTutor';
import TutorProfile from './src/screens/Student/TutorProfile';
import SubjectArea from './src/screens/Student/SubjectArea';

import BackIcon from './src/icons/BackIcon';
import {COLORS} from './src/constants/Colors';

import { navigationRef } from './src/navigationRef';
import TutorAppointment from './src/screens/Tutor/TutorAppointment';

const Stack = createStackNavigator();

const App = () => { 
  return ( 
    <NavigationContainer ref={navigationRef}>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName='ResolveAuth'>
            <Stack.Screen name="ResolveAuth" component={ResolveAuthScreen} options={{header: () => null}} />
            <Stack.Screen name="Login" component={LoginScreen} options={{header: () => null}} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{header: () => null}} />
            <Stack.Screen name="StudentTabNav" component={StudentTabsScreen} options={{header: () => null}} />
            <Stack.Screen name="TutorTabNav" component={TutorTabsScreen} options={{header: () => null}} />
            <Stack.Screen name="SignupActivation" component={SignupActivationScreen} options={{header: () => null}} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{header: () => null}}/>
            <Stack.Screen name="MessageUser" component={MessageScreen} options={{header: () => null}} />
            <Stack.Screen name="MessageUserTutor" component={MessageScreenTutor} options={{header: () => null}} />
            <Stack.Screen name="TutorProfile" component={TutorProfile} options={{header: () => null}} />
            <Stack.Screen name="TutorAppointment" component={TutorAppointment} options={{header: () => null}} />
            <Stack.Screen name="SubjectArea" component={SubjectArea} options={{header: () => null}} />
        </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default () => {
  return(
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
