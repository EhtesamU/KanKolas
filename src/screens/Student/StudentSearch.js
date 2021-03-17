import React, { useContext, useState, useEffect } from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import {Searchbar} from 'react-native-paper';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {ListItem, Avatar} from 'react-native-elements';
import axios  from 'axios';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const featuredTutors = [
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
  


export default function StudentSearch({navigation}){

    const [dataSource] = useState(['IT', 'Engineering', 'Law', 'Science', 'Health', 'Architecture', 'Arts', 'Business', 'Education'])

    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [searching, setSearching] = useState(false)
  
   
    useEffect(() => {
      axios.get('https://utsho1868.github.io/infos.json').then(res => {
        console.log(res.data);
        setFilteredDataSource(res.data);
        setMasterDataSource(res.data);
      })
   },[])
    

    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
       setSearching(true);
        const newData = masterDataSource.filter(
          function (item) {
            const itemData = item.unitCode
              ? item.unitCode.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setFilteredDataSource(newData);
        setSearch(text);
      } else {
        // Inserted text is blank
        // Update FilteredDataSource with masterDataSource
        setFilteredDataSource(masterDataSource);
        setSearch(text);
        setSearching(false)
      }
    };
  
    const ItemView = ({item, idx}) => {
      return (
        // Flat List Item
        // <Text
        //   style={styles.itemStyle}
        //   onPress={() => getItem(item)}>
        //   {item.name.toUpperCase()}
        // </Text>
        <ListItem 
            key={idx} 
            bottomDivider 
            onPress={() => navigation.navigate('TutorProfile', {otherParam: item})}
            style={{marginVertical:0, marginHorizontal: 10}}
            containerStyle={{borderRadius: 5}}
        >
        <Avatar size = "small" rounded source={{uri: `${item.unitPic}`}} />
        <ListItem.Content>
        <ListItem.Title>{item.unitCode}</ListItem.Title>
        </ListItem.Content>
    </ListItem>
      );
    };
  
    const ItemSeparatorView = () => {
      return (
        // Flat List Item Separator
        <View
          style={{
            height: 0.5,
            width: '80%',
            backgroundColor: '#C8C8C8',
          }}
        />
      );
    };

  
    // const getItem = (item) => {
    //   // Function for click on an item
    //   alert('Id : ' + item.id + ' Title : ' + item.title);
    // };
    
    return(
        <View style={{marginTop: getStatusBarHeight()}}>
            
            <Searchbar 
                placeholder='Search Tutor by Unit Code'
                value={search}
                onChangeText={(text) => searchFilterFunction(text)}
                style={{width: .90 * windowWidth, borderRadius: 10, backgroundColor: '#EAEAEA', alignSelf:'center', marginBottom: 10}}
                
            />
              { 
            searching && 
            <View style={{marginHorizontal: 10, height: windowHeight}}>
            <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
            />
            </View> 
            }
            <Text style={{ fontSize: 18, marginVertical: 20, marginLeft: 10 }}> Tutors by Subject Area</Text>
            <View style={{
               flexWrap: 'wrap', flexDirection: 'row',
             justifyContent: 'center'
            }}>
                {
                    dataSource.map((item, index) => {
                    return (
                        
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('SubjectArea', {otherParam: item})}>
                         <View style={{
                             margin: 10,
                             justifyContent: 'center',
                             alignItems: 'center',
                             height: 40, width: 100, 
                             backgroundColor: '#F9F0EE', 
                             borderRadius: 5, 
                             borderWidth: 1,
                             borderColor: 'black'
                        }}>
                           
                            <Text style={{ fontSize: 15 }} >
                             {item}
                            </Text>
                           
                           
                        </View>
                        </TouchableOpacity>
                       
                          )
                     })
                }
            
             </View>
            <Text style={{ fontSize: 18, marginVertical: 20, marginLeft: 10 }}>Featured Tutors</Text>
            <View>
            {
                featuredTutors.map((l, i) => ( 
                <ListItem 
                    key={i} 
                    bottomDivider 
                    onPress={() => navigation.navigate('MessageUser', {otherParam: l.name})}
                    style={{marginVertical: 5, marginHorizontal: 10}}
                    containerStyle={{borderRadius: 1}}
                >
                    <Avatar size = "medium" rounded source={{uri: l.avatar_url}} />
                    <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron color="black" />
                </ListItem>
              
                ))
            }
            </View>
          
            
        </View>
    );
}
