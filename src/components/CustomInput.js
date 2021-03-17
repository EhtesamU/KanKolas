import React from 'react';
import {View, StyleSheet, Text, TextInput, Dimensions} from 'react-native';
import {COLORS} from '../constants/Colors';

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
                secureTextEntry={secureTextEntry || false}
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
            {displayError ? <View style={styles.errorWrapper}><Text style={styles.errorText}>{errorText}</Text></View> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center'
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
    }
    
    
})