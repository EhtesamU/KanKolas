import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import {Appbar, Card, Paragraph, Title} from 'react-native-paper';
import Axios from 'axios';
import {ListItem, Avatar} from 'react-native-elements';
import CustomCard from '../../components/CustomCard'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 
const list = [
    {
      name: 'Ami Jarha',
      avatar_url: 'https://live.staticflickr.com/65535/50926846268_0a05d83206_z.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://live.staticflickr.com/65535/50926836403_6883441350_c.jpg',
      subtitle: 'Vice Chairman'
    },
  ];
  
export default function Message({navigation}){

    return(
    <View>
        <View>
        <Appbar.Header style={{backgroundColor: 'white'}}>
                <Appbar.Action icon="account" /> 
                <Appbar.Content title='Chats' titleStyle={{fontSize: 24, fontFamily: 'Bradley Hand', letterSpacing: 5}}/>
                <Appbar.Action icon="magnify" />    
            </Appbar.Header>
        </View>
        <View>
            {
                list.map((l, i) => ( 
                <ListItem 
                    key={i} 
                    bottomDivider 
                    onPress={() => navigation.navigate('MessageUser', {otherParam: l.name})}
                >
                    <Avatar size = "large" rounded source={{uri: l.avatar_url}} />
                    <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
              
                ))
            }
        </View>
        
      
    </View>

    );
}