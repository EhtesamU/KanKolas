import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, FlatList} from 'react-native';
import {Appbar, Searchbar} from 'react-native-paper';
import {ListItem, Avatar} from 'react-native-elements';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TutorProfile({route, navigation}){

    const {otherParam} = route.params;
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [searching, setSearching] = useState(false)
  
    useEffect(() => {
      fetch('https://utsho1868.github.io/infos.json')
        .then((response) => response.json())
        .then((responseJson) => {
          setFilteredDataSource(responseJson);
          setMasterDataSource(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
   
   
    

    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
       setSearching(true);
        const newData = masterDataSource.filter(
          function (item) {
            const itemData = item.unit
              ? item.unit.toUpperCase()
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
      <ListItem 
        key={idx} 
        bottomDivider 
        onPress={() => navigation.navigate('TutorProfile', {otherParam: item.name})}
      >
        <Avatar size = "large" rounded source={{uri: 'https://live.staticflickr.com/65535/50926836403_6883441350_c.jpg'}} />
        <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.unit}</ListItem.Subtitle>
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
            width: '100%',
            backgroundColor: '#C8C8C8',
          }}
        />
      );
    };

  

    return(
       <View>
           <Appbar.Header style={{backgroundColor: 'white'}}>
                <Appbar.BackAction onPress={() => navigation.navigate('StudentTabNav')}/>
                <Appbar.Content title={`${otherParam} Tutors`}  titleStyle={{fontSize: 24}}/>
            </Appbar.Header>

            <Searchbar 
                placeholder='Search by Unit Code'
                value={search}
                onChangeText={(text) => searchFilterFunction(text)}
                style={{width: .95 * windowWidth, borderRadius: 5, backgroundColor: '#EAEAEA', alignSelf:'center', marginVertical: 10}}
                
            />
              { 
            searching && 
            <View style={{marginHorizontal: 20, height: windowHeight *.5}}>
            <FlatList
                data={filteredDataSource}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
            />
            </View> 
            }
           
           <Text>
                 Tutor Details 
           </Text>
           

       </View>
    )
}
