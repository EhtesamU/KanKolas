import React from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';
//import Header from '../../components/Header';
import { StatusBar } from 'expo-status-bar';
import SearchIcon from '../../icons/SearchIcon';


export default function MessageScreen({route, navigation}){

    const {otherParam} = route.params;

    return(
       <View>
           <Appbar.Header style={{backgroundColor: 'white'}}>
                <Appbar.BackAction onPress={() => navigation.navigate('StudentTabNav')}/>
                <Appbar.Content title={otherParam} titleStyle={{fontSize: 24}}/>
            </Appbar.Header>
           
           <Text>
                 otherParam: 
           </Text>

       </View>
    )
}
