import React, { Component } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, StyleProvider } from 'native-base';
import { color } from 'react-native-reanimated';
import { Rating } from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function CustomCard({unitCode, unitPic, rating, description, price}){
    return (
        <Container>
        <Card style={{borderWidth: 10, borderColor: 'black'}}>
          <CardItem>
            <Left>
              <Body>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{unitCode}</Text>
              </Body>
            </Left>
            <Right>
                <Text>Rating: {rating}/5</Text>
            </Right>
          </CardItem>
          <CardItem> 
            <Image source={{uri: `${unitPic}`}} style={{height:100, width: windowWidth *.4}}/> 
            <View style={{marginLeft: 10, width: windowWidth * .40 }}>
                <Text>{description}</Text>
            </View>
          </CardItem>
          <CardItem>
            <Left></Left>
            <Body>
              
            </Body>
            <Right>
              <Text style={{fontSize: 18, color: 'green'}}>${price}/hour</Text>
            </Right>
          </CardItem>
           
        </Card>
      
    </Container>
    )
}