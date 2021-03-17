import React from 'react';
import {Text} from 'react-native';
import {Appbar} from 'react-native-paper';

import Header from '../../components/Header';

export default function ForgotPassword({navigation}){
    return(
        <Appbar.Header style={{backgroundColor: 'white'}}>
                <Appbar.BackAction onPress={() => navigation.navigate('Login')}/>
                <Appbar.Content title='Reset Password'  titleStyle={{fontSize: 24}}/>
            </Appbar.Header>
    );
}