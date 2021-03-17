import React, {useContext, useState} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import SearchableDropdown from 'react-native-searchable-dropdown';
import MultiSelect from "react-native-multiple-select";

import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import {Context as AuthContext} from '../../context/AuthContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default function StudentPending({navigation}){
    const { signout } = useContext(AuthContext);
    const [university, setUniversity] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

   
    return(   
        <View style={styles.container}>
        <CustomButton
              //   titleStyle={styles.loginButtonText}
              //  // loading={isLoading}
              // //  disabled={isLoading}
              //   disabledStyle={styles.loginButton}
              //   buttonStyle={styles.loginButton}
                 onPress={signout} 
                title="SIGN OUT"
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center'
    }
})

