import React, { useRef, useState, useEffect } from 'react';
import { SearchBar, Icon } from 'react-native-elements';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/Colors';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import CustomInput from '../components/CustomInput';
//import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Search from '../icons/SearchIcon';
import HamburgerIcon from '../icons/HamburgerIcon';
import CloseSerachIcon from '../icons/CloseSerachIcon';
import BackIcon from '../icons/BackIcon';

const header = ({ headerTitle, onPress, setSearchText, onSearch, isSearchPress, setIsSearchPress,clearSearch,navigation  }) => {
    const searchTextInputRef = useRef(null);

    useEffect(() => {
        if(isSearchPress){
            searchTextInputRef.current.focus()
        }
    }, [isSearchPress === true])

    return (
        <View style={styles.mainWrapper}>
            {!isSearchPress ?
                <View style={styles.titleWrapper}>
                    <View  style={{marginLeft: -10, paddingTop:5,justifyContent:'flex-start'}}>
                         {/* <Ionicons name="menu-outline"  size={30} color={COLORS.black} onPress={() => navigation.openDrawer()} /> */}
                        <HamburgerIcon width={25} height={25} color={COLORS.black} onPress={() => navigation.openDrawer()}/>     
                    </View>
                    <Text style={{ color: COLORS.black,fontFamily:COLORS.montserrat500,fontSize:30 }}>
                        {headerTitle}
                    </Text>
                    {/* <AntDesign name="search1"  style={{paddingLeft: 10, paddingTop:10,paddingRight:20, marginRight:-20 ,marginTop:-8}} size={30} color={COLORS.black} onPress={() => setIsSearchPress()} /> */}
                    <View  style={{paddingLeft: 10, paddingTop:10,paddingRight:20, marginRight:-20 ,marginTop:-8}}>
                         <Search width={30} height={30} color={COLORS.black} onPress={() => setIsSearchPress()}/>
                    </View>
                </View>
                :
                <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity style={{ paddingHorizontal: 10, marginLeft:-20}} onPress={() => clearSearch()}>
                    {/* <Icon name={'chevron-left'} size={40} color={COLORS.black} /> */}
                         <CloseSerachIcon width={40} height={40} color={COLORS.black} />
                    </TouchableOpacity> 
                    <CustomInput
                        wrapperClass={{ flex: 1 }}
                        style={styles.effortInput}
                        returnKeyType='search'
                        placeholder="Search"
                        inputRef={searchTextInputRef}
                        placeholderTextColor={COLORS.black}
                        onChangeText={(txt) => setSearchText(txt)}
                        onSubmitEditing={() => onSearch()}
                    />
                </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        position: 'relative',
        flex: 0,
        flexDirection: "row",
        height: 85,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10,
        backgroundColor: COLORS.white,
    },
    titleWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    containerStyle: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderColor: COLORS.white
    },
    inputContainerStyle: {
        backgroundColor: COLORS.white
    },
    searchBarStyle: {
        backgroundColor: COLORS.white,
        fontSize: 18
    },
    buttonStyle: {
        width: 65,
        height: 65,
        backgroundColor: COLORS.white,
        borderRadius: -1,
    },
    effortInput: {
        // fontStyle: "italic",
        maxWidth: '100%',
        borderWidth: 1,
        marginLeft: 5,
        fontSize: 18,
        height: 40,
        color: COLORS.black,
        fontFamily: COLORS.montserrat400,
        borderColor: COLORS.black
    },
});

export default header;