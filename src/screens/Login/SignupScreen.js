import React, {useState, useContext} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Keyboard} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { COLORS } from '../../constants/Colors';
import {Context as AuthContext} from '../../context/AuthContext';


import NavLink from '../../components/NavLink';


export default function SignUp({navigation}){
  
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    
   // const [firstName, setFirstName] = useState('');
   // const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    //const [university, setUniversity] = useState('');
    const [password, setPassword] = useState('');
   // const [retypePassword, setRetypePassword] = useState('');
    return(
       
        <View style={styles.container}>
          {/* <CustomInput 
                returnKeyType="next"
                value={firstName}
                placeholderTextColor= '#525457'
                placeholder='First Name'
                style={styles.loginFormTextInput}
                onChangeText={(nFirst) => setFirstName(nFirst)}
                autoCorrect={false}
            />  
          <CustomInput 
                returnKeyType="next"
                value={lastName}
                placeholderTextColor= '#525457'
                placeholder='Last Name'
                style={styles.loginFormTextInput}
                onChangeText={(nLast) => setLastName(nLast)}
                autoCorrect={false}
            />   */}
            
           <CustomInput 
                keyboardType="email-address"
                returnKeyType="next"
                value={email}
                placeholderTextColor= '#525457'
                placeholder='Email Address'
                style={styles.loginFormTextInput}
                onChangeText={(newMail) => setEmail(newMail)}
                autoCorrect={false}
                autoCapitalize="none"
            />
{/* 
            <CustomInput 
                returnKeyType="next"
                value={university}
                placeholderTextColor= '#525457'
                placeholder='University You Attending'
                style={styles.loginFormTextInput}
                onChangeText={(nLast) => setUniversity(nLast)}
                autoCorrect={false}
            />   */}
            <CustomInput 
                returnKeyType="go"
                value={password}
                placeholderTextColor='#525457'
                style={styles.loginFormTextInput}
                placeholder='Password'
                onChangeText={(pwd) => setPassword(pwd)}
                autoCorrect={false}
                secureTextEntry={true}
            />
            {/* <CustomInput 
                returnKeyType="go"
                value={retypePassword}
                placeholderTextColor='#525457'
                style={styles.loginFormTextInput}
                placeholder='Retype Password'
                onChangeText={(pwd) => setRetypePassword(pwd)}
                autoCorrect={false}
                secureTextEntry={true}
            /> */}

            {state.errorMessage ? <Text style ={styles.errorMessage}>{state.errorMessage}</Text> : null}

            <CustomButton
                titleStyle={styles.signUpButtonText}
               // loading={isLoading}
              //  disabled={isLoading}
                disabledStyle={styles.loginButton}
                buttonStyle={styles.loginButton}
                 onPress={() => signup({ email, password})}
                title="SIGN UP"
            />

            
            <NavLink 
                text = "Already have an account?"
                buttonText="Log In"
                routeName="Login"
            />
           

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    loginFormTextInput: {
        height: 50,
        fontSize: 14,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginHorizontal: 15,
        marginVertical: 5,
        color: COLORS.black,
        borderRadius: 0
    },
    forgotPassword: {
        color:'#5F4EC6', 
        fontSize: 16, 
        fontWeight:'bold',
        marginHorizontal: 15,
        marginVertical: 10
    },
    loginButton: {
        backgroundColor: COLORS.black,
        height: 45,
        marginVertical: 20,
        textTransform: "uppercase",
        borderRadius: 10,
        marginHorizontal: 15,
    },
    signUpButtonText: {
        fontFamily: COLORS.robotoBlack,
        fontSize: 16,
        fontWeight: '900',
        color: COLORS.white
    },
    login:{
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: COLORS.black,
        textTransform: 'uppercase',
        fontSize: 16
    },
    errorMessage: {
        fontSize: 16, 
        color: 'red', 
        marginTop: 10,
        marginLeft: 20
    }
})