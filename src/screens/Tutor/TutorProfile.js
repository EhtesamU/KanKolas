import React, {useState,useContext, useEffect} from 'react';
import {Appbar} from 'react-native-paper';
import {View, Text, TextInput, Button, Dimensions, ScrollView, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import {Context as AuthContext} from '../../context/AuthContext';
import * as ImagePicker from 'expo-image-picker';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const uniList = [
    {label: 'Macquarie University', value: 'Macquarie University', icon: () => <Icon name="flag" size={18} color="#900" />},
    {label: 'University of Technology Sydney', value: 'University of Technology', icon: () => <Icon name="flag" size={18} color="#900" />},
    {label: 'University of Sydney', value: 'University of Sydney', icon: () => <Icon name="flag" size={18} color="#900" />},
    {label: 'University of New South Wales', value: 'University of New South Wales', icon: () => <Icon name="flag" size={18} color="#900" />},
    {label: 'University of Western Sydney', value: 'University of Western Sydney', icon: () => <Icon name="flag" size={18} color="#900" />},
];

const unitsName = [
    {
        id: 1,
        name: 'COMP1010'
    },
    {
        id: 2,
        name: 'ENG1000'
    },
    {
        id: 3,
        name: 'COMP1000'
    },
    {
        id: 4,
        name: 'ACCG3058'
    },
    {
        id: 5,
        name: 'ECON1010'
    }
]


export default function StudentProfile(){
    const [name, setName] = useState('Ehtesam Utsho');
    const [email, setEmail] = useState('ehtesam.utsho@gmail.com');
    const [university, setUniversity] = useState('Macquarie University');
    const [units, setUnits] = useState('COMP1240, ACCG3058');
    const [edit, setEdit] = useState(false);
    const [save, setSave] = useState(true);
    const [addUnits, setAddUnits] = useState(false);
    const [title, setTitle] = useState('Profile');
    const [selectedItems, setSelectedItems] = useState([]);
    const { signout } = useContext(AuthContext);

    const Edit = () => {
        setSave(false);
        setEdit(true);
        setAddUnits(false);
        setTitle('Edit Profile');
    }
    const Save = () => {
        setSave(true);
        setEdit(false);
        setAddUnits(false);
        setTitle('Profile');
    }
    const AddUnits = () => {
        setSave(false);
        setEdit(false);
        setAddUnits(true);
        setTitle('Add Units');
    }
    const AddedUnits = () => {
        setSave(false);
        setEdit(true);
        setAddUnits(false);
        setTitle('Edit Profile')
    }

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    return (
            <>
            {
                <View>
                    <Appbar.Header style={{backgroundColor: 'white'}}>
                    <Appbar.Content title= {title} titleStyle={{fontSize: 24, fontFamily: 'Bradley Hand', letterSpacing:5}}/>
                    </Appbar.Header>
                </View>
            }
            
            { 
                save &&
                <ScrollView>
                    <View style={{paddingTop: 20, alignSelf: 'center'}}>
                        {image && 
                        <Image 
                            source={{ uri: image }} 
                            style={{width: windowWidth* .7, height: windowWidth*.5, resizeMode:'cover', borderWidth:2}}
                         />}
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>NAME</Text>
                        <Text style={styles.titleDesc}>{name}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title1}>EMAIL</Text>
                        <Text style={styles.titleDesc1}>{email}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title1}>UNIVERSITY</Text>
                        <Text style={styles.titleDesc1}>{university}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={styles.title2}>UNITS</Text>
                    <Text style={styles.titleDesc2}>
                    { selectedItems.map((item, index) => {
                        return(
                        <Text key={index}>
                             {item.name}{"  "}
                        </Text>
                        
                        
                        )
                      })
                    }
                    </Text>
                    </View>
                    <View style={styles.buttonView}>
                        <CustomButton 
                            onPress={Edit} 
                            title="EDIT PROFILE" 
                            buttonStyle={{backgroundColor: 'white', borderWidth: 1, borderColor: '#3F304F'}}
                            titleStyle={{color: '#3F304F'}}

                        />
                        <CustomButton 
                            onPress={signout} 
                            title="SIGN OUT"               
                        />
                    </View>
                
                </ScrollView>
            }

            { 
                edit &&
                <ScrollView>
                    <View style={{paddingTop: 20, alignSelf: 'center'}}>
                        {image && 
                        <Image 
                            source={{ uri: image }} 
                            style={{width: windowWidth* .7, height: windowWidth*.5, resizeMode:'cover', borderWidth:2}}
                         />}
                    </View>
                    <View>
                        <Button title="Upload Image" onPress={pickImage} />
                    </View>
                    <View>
                    <Text style={styles.editTitle}>NAME</Text>
                    <TextInput 
                        value={name}
                        onChangeText={text => setName(text)}
                        style={styles.editTitleDesc}
                    ></TextInput>
                    <Text style={styles.editTitle}>EMAIL</Text>
                    <Text style={styles.editEmail}>{email}</Text>
                 
                    <Text style={styles.editTitle}>UNIVERSITY</Text>
                    <DropDownPicker
                        items={uniList}
                        defaultValue={university}
                        containerStyle={{height: 40, marginHorizontal: 10}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        dropDownMaxHeight={200}
                        onChangeItem={item => setUniversity(item.value)}
                    />
                    <Text style={styles.editTitle}>UNITS</Text>
                    <Text style={styles.editUnitsDesc}>
                    { selectedItems.map((item, index) => {
                        return(
                        <Text key={index}>
                             {item.name}{"   "}
                        </Text>   
                        )
                      })
                    }
                    </Text>
                    <View style={{width: windowWidth*.4, alignSelf: 'center'}}>
                        <CustomButton 
                            onPress={AddUnits} 
                            title="ADD UNITS" 
                            buttonStyle={{backgroundColor: 'white', borderWidth: 1, borderColor: '#3F304F'}}
                            titleStyle={{color: '#3F304F'}}

                        />
                    </View>
                    
            
                    </View>
                    <View style={styles.buttonView}>
                        <CustomButton
                            onPress={Save} 
                            title="SAVE"
                        />
                    </View>
                    
                </ScrollView>  
               
            }
            {
                addUnits && 
                <View>
                    <SearchableDropdown
                        multi={true}
                        selectedItems={selectedItems}
                        onItemSelect={(item) => {
                            const items = selectedItems
                            items?.push(item);
                            setSelectedItems(items);
                        }}
                        containerStyle={{ padding: 2, marginHorizontal:5  }}
                        onRemoveItem={(item, index) => {
                            const items = selectedItems.filter((sitem) => sitem.id !== item.id);
                            setSelectedItems(items);
                        }}
                        itemStyle={{
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#ddd',
                            borderColor: '#bbb',
                            borderWidth: 1,
                            borderRadius: 5,
                        }}
                        itemTextStyle={{ color: '#222' }}
                        itemsContainerStyle={{ maxHeight: 150 }}
                        items={unitsName}
                        chip={true}
                        resetValue={true}
                        textInputProps={
                        {
                            placeholder: "Choose Current Units",
                            placeholderTextColor: "black",
                            underlineColorAndroid: "transparent",
                            style: {
                                padding: 12,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 5,
                                backgroundColor: 'white',
                                color: 'black'
                            }
                            
                        }
                        }
                        listProps={
                        {
                            nestedScrollEnabled: true,
                        }
                        }
                    />
                    <View style={styles.buttonView}>
                        <CustomButton onPress={AddedUnits} title="Save Units" />
                    </View>
                </View>
            }
        </>   
    )
}

const styles = StyleSheet.create({

    buttonView : {
        marginTop: 70,
        width: windowHeight * .4,
        alignSelf: 'center',    
    },
    title: {
        marginTop: 20,
        marginLeft: 20,
        padding: 14,
        fontSize: 14,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white',
        color: '#330000',
        width: windowWidth*.3,
    },
    titleDesc: {
        marginTop: 20,
        marginLeft: 0,
        padding: 14,
        fontSize: 14,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white',
        color: '#330000',
        width: windowWidth * .6,
    },
    title1: {
        marginLeft: 20,
        padding: 14,
        fontSize: 14,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white',
        color: '#330000',
        width: windowWidth*.3,
    },
    titleDesc1: {    
        marginLeft: 0,
        padding: 14,
        fontSize: 14,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white',
        color: '#330000',
        width: windowWidth * .6,
    },
    title2: {
        marginLeft: 20,
        padding: 14,
        fontSize: 14,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white',
        color: '#330000',
        width: windowWidth*.3,
        
    },
    titleDesc2: {    
        marginLeft: 0,
        marginRight:5,
        padding: 14,
        fontSize: 14,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white',
        color: '#330000',
        width: windowWidth * .6,
    },
    editTitle: {
        fontSize: 16, 
        marginHorizontal: 10,
        marginVertical: 5, 
        paddingTop:10,
        letterSpacing:3
    },
    editTitleDesc: {
        borderColor: '#ccc', 
        borderWidth: 1, 
        padding: 14, 
        fontSize: 14,
        marginHorizontal:10, 
        marginVertical:5, 
        backgroundColor: 'white'
    },
    editEmail: {
        borderColor: '#ccc', 
        borderWidth: 1, 
        padding: 14, 
        fontSize: 14,
        marginHorizontal:10, 
        marginVertical:5
    },
    editUnitsDesc: {    
        padding: 14,
        fontSize: 14,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white',
        color: '#330000',
        marginHorizontal: 10
    },
})


