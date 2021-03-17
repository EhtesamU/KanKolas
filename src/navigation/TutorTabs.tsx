import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import TutorMessage from '../screens/Tutor/TutorMessage';
import TutorConfirmed from '../screens/Tutor/TutorConfirmed';
import TutorPayslip from '../screens/Tutor/TutorPayslip';
import TutorProfile from '../screens/Tutor/TutorProfile';
import TutorEditProfile from '../screens/Tutor/TutorEditProfile';
import AppointmentScreen from '../screens/Tutor/AppointmentDetails';

import { COLORS } from '../constants/Colors';
import Inbox from '../icons/InboxIcon';
import CheckIcon from '../icons/CheckIcon';
import DollarIcon from '../icons/DollarIcon';
import ProfileIcon from '../icons/ProfileIcon';

import SearchIcon from '../icons/SearchIcon';
import PendingIcon from '../icons/PendingIcon';


const BottomTab = createBottomTabNavigator();

export default function TutorTabs ({navigation}: any, isTabVisible) {
  return (
      <BottomTab.Navigator
          initialRouteName="Message"
          tabBarOptions={{
              activeTintColor: COLORS.primary,
              inactiveBackgroundColor: COLORS.white,
              activeBackgroundColor: COLORS.white,
              inactiveTintColor: COLORS.lightGrey
          }}
      >
          <BottomTab.Screen 
              name="Message"
              component={TutorMessage} 
              options={{
                  tabBarVisible: isTabVisible,
                  tabBarLabel: "",
                  tabBarIcon: ({ color }: any) => <Inbox width={25} height={25} color={color} style={{marginBottom: -20}} />
              }}
          />
           <BottomTab.Screen 
              name="Confirmed"
              component={AppointmentScreen} 
              options={{
                  tabBarVisible: isTabVisible,
                  tabBarLabel: "",
                  tabBarIcon: ({ color }: any) => <CheckIcon width={25} height={25} color={color} style={{marginBottom: -20}} />
              }}
          />
          <BottomTab.Screen 
              name="Payslip"
              component={TutorPayslip} 
              options={{
                  tabBarVisible: isTabVisible,
                  tabBarLabel: "",
                  tabBarIcon: ({ color }: any) => <DollarIcon width={25} height={25} color={color} style={{marginBottom: -20}} />
              }}
          />
          <BottomTab.Screen 
              name="Profile"
              component={TutorProfile} 
              options={{
                  tabBarVisible: isTabVisible,
                  tabBarLabel: "",
                  tabBarIcon: ({ color }: any) => <ProfileIcon width={25} height={25} color={color} style={{marginBottom: -20}} />
              }}
          />
      </BottomTab.Navigator>
  );
}