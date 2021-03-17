import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import { COLORS } from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const NavLink = ({  text, buttonText, routeName }) => {
    const navigation = useNavigation();
    return(
        <View style={{flexDirection: 'row', marginHorizontal: 15, alignSelf: 'center' }}>
            <Text style={{fontSize: 16}}>{text}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)} >
                 <Text style={styles.link}>{buttonText}</Text>
            </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create({
    link: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: COLORS.black,
        textTransform: 'uppercase',
        fontSize: 16
    }
});

export default NavLink;