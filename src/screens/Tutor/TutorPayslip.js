import React from 'react';
import {View, Text} from 'react-native'
import {Appbar} from 'react-native-paper';



export default function Message({navigation}){
    return(
        <View>
            <Appbar.Header style={{backgroundColor: 'white'}}>
            <Appbar.Content title= 'Units' titleStyle={{fontSize: 24, fontFamily: 'Bradley Hand', letterSpacing:5}}/>
            </Appbar.Header>
        </View>
    );
}