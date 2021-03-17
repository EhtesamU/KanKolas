import React from 'react';
import {View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CustomCard from '../../components/CustomCard';

import Header from '../../components/Header';

export default function Message({navigation}){
    return(
       
            <ScrollView>

            <CustomCard 
                unitCode = 'CENG100'
                unitPic = 'https://picsum.photos/700'
                rating = '3'
                description = 'You will see the beauty of engineering'
                price = '34'
                
            />
            </ScrollView>
           
       
       
    );
}