import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {View} from '../components/Themed';
import {COLORS} from '../constants/Colors';
import Inbox from '../icons/InboxIcon';
import TutorMessage from '../screens/Tutor/TutorMessage';
import TutorConfirmed from '../screens/Tutor/TutorConfirmed';

const isTutor = true;


//const [isTabVisible, setTabVisible] = useState(true);
function BottomTabNavigation({ navigation, item }: any){
    
    const [isTabVisible, setTabVisible] = useState(true);
    
    if(isTutor){
        return TutorTabs(navigation, isTabVisible); 
    }else{
        return;
    }
}

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
                component={TutorConfirmed} 
                options={{
                    tabBarVisible: isTabVisible,
                    tabBarLabel: "",
                    tabBarIcon: ({ color }: any) => <Inbox width={25} height={25} color={color} style={{marginBottom: -20}} />
                }}
            />
        </BottomTab.Navigator>
    );
}

const TabTutorStack = createStackNavigator();

const TabTutorNavigator = ({ navigation }: any) => {
    return(
        <TabTutorStack.Navigator>
            <TabTutorStack.Screen
                name="Home"
                children={(props) => <TutorMessage {...props} />}
                options={{
                    headerTitle: 'Message',
                    headerTitleAlign: 'center',
                    headerShown: false,
                    headerTitleStyle: {color: COLORS.black, fontSize: 36, fontFamily: COLORS.montserrat400, marginBottom: 14},
                    headerStyle: {backgroundColor: COLORS.white}
                }}
            />
        </TabTutorStack.Navigator>
    );
}
