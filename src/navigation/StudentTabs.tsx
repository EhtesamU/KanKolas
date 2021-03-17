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


import StudentMessage from '../screens/Student/StudentMessage';
import StudentConfirmed from '../screens/Student/StudentConfirmed';
import StudentPending from '../screens/Student/StudentPending';
import StudentSearch from '../screens/Student/StudentSearch';
import AppointmentScreen from '../screens/Student/AppointmentScreen';

import { COLORS } from '../constants/Colors';
import Inbox from '../icons/InboxIcon';
import CheckIcon from '../icons/CheckIcon';
import DollarIcon from '../icons/DollarIcon';
import ProfileIcon from '../icons/ProfileIcon';

import SearchIcon from '../icons/SearchIcon';
import PendingIcon from '../icons/PendingIcon';
import StudentProfile from '../screens/Student/StudentProfile';

const BottomTab2 = createBottomTabNavigator();

export default function StudentTabs ({navigation}: any, isTabVisible) {
  return (
      <BottomTab2.Navigator
          initialRouteName="Search"
          tabBarOptions={{
              activeTintColor: COLORS.primary,
              inactiveBackgroundColor: COLORS.white,
              activeBackgroundColor: COLORS.white,
              inactiveTintColor: COLORS.lightGrey
          }}
      >
          <BottomTab2.Screen 
              name="Search"
              component={StudentSearch} 
              options={{
                  tabBarVisible: isTabVisible,
                  tabBarLabel: "",
                  tabBarIcon: ({ color }: any) => <SearchIcon width={25} height={25} color={color} style={{marginBottom: -20}} />
              }}
          />
           <BottomTab2.Screen 
              name="Message"
              component={StudentMessage} 
              options={{
                  tabBarVisible: isTabVisible,
                  tabBarLabel: "",
                  tabBarIcon: ({ color }: any) => <Inbox width={25} height={25} color={color} style={{marginBottom: -20}} />
              }}
          />
          <BottomTab2.Screen 
              name="AppointmentScreen"
              component={AppointmentScreen} 
              options={{
                  tabBarVisible: isTabVisible,
                  tabBarLabel: "",
                  tabBarIcon: ({ color }: any) => <CheckIcon width={25} height={25} color={color} style={{marginBottom: -20}} /> 
              }}
          />
          <BottomTab2.Screen 
              name="Profile"
              component={StudentProfile} 
              options={{
                  tabBarVisible: isTabVisible,
                  tabBarLabel: "",
                  tabBarIcon: ({ color }: any) => <ProfileIcon width={25} height={25} color={color} style={{marginBottom: -20}} />
              }}
          />
      </BottomTab2.Navigator>
  );
}