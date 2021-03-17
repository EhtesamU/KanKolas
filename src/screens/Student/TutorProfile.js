import React from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';
//import Header from '../../components/Header';
import { StatusBar } from 'expo-status-bar';
import SearchIcon from '../../icons/SearchIcon';
import CustomCard from '../../components/CustomCard';
import { ScrollView } from 'react-native-gesture-handler';


export default function TutorProfile({route, navigation}){

    const {otherParam} = route.params;

    return(
       <View>
           <Appbar.Header style={{backgroundColor: 'white'}}>
                <Appbar.BackAction onPress={() => navigation.navigate('StudentTabNav')}/>
                <Appbar.Content title={otherParam.name} titleStyle={{fontSize: 24}}/>
            </Appbar.Header>
           
         <ScrollView>
            <CustomCard 
                    unitCode = {otherParam.unitCode}
                    unitPic = {otherParam.unitPic}
                    rating = {otherParam.rating}
                    description = {otherParam.description}
                    price = {otherParam.price}
                    
                />
         </ScrollView>

       </View>
    )
}
