import React from 'react';
import {View, StyleSheet, Text, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {COLORS} from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { set } from 'react-native-reanimated';
import * as RootNavigation from '../navigationRef';

const windowWidth = Dimensions.get('window').width;

export default function customInput({
    placeholderTextColor,
    placeholder,
    onChangeText,
    errorText,
    style,
    keyboardType, 
    wrapperClass,
    multiline,
    numberOfLines,
    textAlignVertical,
    secureTextEntry,
    returnKeyType,
    autoCorrect,
    autoCapitalize,
    value,
    inputRef,
    displayError,
    onSubmitEditing,
    maxLength,
    isEditable,
    onAccessibilityTap,
    onTouchEnd,
    onChange,
    onBlur,
    onFocus,
    inputAccessoryViewID
}){
    const icon = !visible ? 'eye-slash' : 'eye';
    const [visible, setVisibility] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    return (
        <View style={[styles.inputWrapper, wrapperClass]}>
           
            <TextInput
                editable={isEditable}
                style={[styles.inputStyle, style]} 
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor || "#525457"}
                onChangeText={onChangeText}
                onChange={onChange}
                keyboardType={keyboardType || 'default'}
                multiline={multiline || false}
                numberOfLines={numberOfLines || 1}
                textAlignVertical={textAlignVertical || "auto"}
                underlineColorAndroid="transparent"
                secureTextEntry={!visible}
                autoCorrect={autoCorrect}
                autoCapitalize={autoCapitalize}
                value={value || null}
                returnKeyType={returnKeyType || "default"}
                ref={inputRef || null}
                onSubmitEditing={onSubmitEditing || null}
                maxLength={maxLength || undefined}
                onTouchStart={onAccessibilityTap}
                onBlur={onBlur}
                onFocus={onFocus}
                inputAccessoryViewID={inputAccessoryViewID}
            />
            {/* <Icon
                name={icon}
                color={'#9e9e9e'}
                onPress={() => setVisibility(!visible)}
                style={[styles.icons, { height: 30, width: 40}]}
            /> */}
            <View style={{flexDirection: 'row'}}>
            <CheckBox
                title='Show Password'
                checked={visible}
                onPress={() => setVisibility(!visible)}
                containerStyle={{width: windowWidth * .5, backgroundColor: null, borderWidth: 0}}
                textStyle={{fontSize: 14, fontWeight:'normal'}}
            />
            <TouchableOpacity onPress={() => RootNavigation.navigate('ForgotPassword', 'SignupActivation')}>
                 <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            </View>
            
            
            {displayError ? <View style={styles.errorWrapper}><Text style={styles.errorText}>{errorText}</Text></View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        
    },
    inputStyle: {
        textAlign: "left",
        borderWidth: 2,
        borderColor: COLORS.grey,
        borderRadius: 10,
        height: 'auto',
      //  width: windowWidth * .80,
        padding: 5,
        fontSize: 18,
        paddingHorizontal: 10,
        marginHorizontal: 10
    },
    errorWrapper: {
        flex: 0,
        flexDirection: 'column'
    },
    errorText: {
        color: '#e3463b',
        marginHorizontal: 15
    },
    forgotPassword: {
        color:'#5F4EC6', 
        fontSize: 14, 
        fontWeight: 'bold',
        marginHorizontal: 5,
        marginVertical: 19
    }
    
    
})