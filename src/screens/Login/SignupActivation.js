import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import { COLORS } from '../../constants/Colors';


export default function Activation({navigation}){
    return(
        <View style={styles.container}>
            
            <View style={{  alignItems:'center', flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={styles.textActivate}>Your account has been created.</Text>
                <Text style={styles.textActivate}>Activation Link has been sent to your email.</Text>
                <Text style={{fontWeight: 'bold', color: COLORS.black, fontSize: 20, marginBottom: 40}}>Please verify!</Text>
            </View>
            <View style={{flexDirection: 'column',justifyContent: 'flex-end'}}>
            <CustomButton
                titleStyle={styles.loginButtonText}
               // loading={isLoading}
              //  disabled={isLoading}
                disabledStyle={styles.loginButton}
                buttonStyle={styles.loginButton}
                 onPress={() => navigation.navigate('Login')}
                title="LOG IN"
            />
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    loginButton: {
        backgroundColor: COLORS.white,
        height: 45,
        marginVertical: 20,
        textTransform: "uppercase",
        borderRadius: 25,
        marginHorizontal: 15,
        borderWidth: 2,
        borderColor: '#432F4F'
    },
    loginButtonText: {
        fontFamily: COLORS.robotoBlack,
        fontSize: 16,
        fontWeight:'bold',
        color: '#432F4F'
    },
    textActivate:{
        marginHorizontal: 10,
        color: COLORS.black,
        fontSize: 20,
        marginBottom: 5
        
    }
})