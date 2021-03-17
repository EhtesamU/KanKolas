import React from 'react';
import {View} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StudentConfirmed from '../Student/StudentConfirmed';
import StudentPending from '../Student/StudentPending';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
        <Tab.Navigator style={{marginTop: getStatusBarHeight() }}>
        <Tab.Screen name="Confirmed" component={StudentConfirmed} />
        <Tab.Screen name="Pending" component={StudentPending} />
        </Tab.Navigator>
  );
}