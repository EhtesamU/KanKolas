import React from 'react';
import {View} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TutorConfirmed from '../Tutor/TutorConfirmed';
import TutorPending from '../Tutor/TutorPending';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
        <Tab.Navigator style={{marginTop: getStatusBarHeight() }}>
        <Tab.Screen name="Confirmed" component={TutorConfirmed} />
        <Tab.Screen name="Pending" component={TutorPending} />
        </Tab.Navigator>
  );
}