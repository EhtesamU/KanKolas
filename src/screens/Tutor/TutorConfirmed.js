import React from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header';

export default function Message({navigation}){
    return(
       <View style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
           <Text>Confirmation Screen</Text>
       </View>
    );
}