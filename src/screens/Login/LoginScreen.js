import React, {useState, useContext} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { COLORS } from '../../constants/Colors';
import NavLink from '../../components/NavLink';
import {Context as AuthContext} from '../../context/AuthContext';
import CustomInputPassword from '../../components/CustomInputPassword';

const windowHeight = Dimensions.get('window').height;

export default function LoginScreen({navigation}){
    
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return(
       
        <View style={styles.container}>
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
             <CustomInputPassword 
                returnKeyType="go"
                value={password}
                placeholderTextColor='#525457'
                style={styles.loginFormTextInput}
                placeholder='Password'
                onChangeText={(pwd) => setPassword(pwd)}
                autoCorrect={false}
            /> 


            
            
            {state.errorMessage ? <Text style ={styles.errorMessage}>{state.errorMessage}</Text> : null}

            <CustomButton
                titleStyle={styles.loginButtonText}
               // loading={isLoading}
              //  disabled={isLoading}
                disabledStyle={styles.loginButton}
                buttonStyle={styles.loginButton}
                 onPress={() => signin({ email,password }) }
                title="LOG IN"
            />

           <NavLink 
                text="Dont have an account?" 
                buttonText="Sign Up" 
                routeName= "Signup"
            />

        </View>
    );
}

  

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
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
    loginButtonText: {
        fontFamily: COLORS.robotoBlack,
        fontSize: 16,
        fontWeight: '900',
        color: COLORS.white
    },
    signUp:{
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