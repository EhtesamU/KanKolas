import React, {useState, createRef} from 'react';
import {View, Text, Dimensions, TextInput, Platform} from 'react-native';
import {Appbar} from 'react-native-paper';
//import Header from '../../components/Header';
import { StatusBar } from 'expo-status-bar';
import SearchIcon from '../../icons/SearchIcon';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import {DatePicker, Content} from 'native-base';
import moment from 'moment';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const uniList = [
    {label: 'Macquarie University', value: 'Macquarie University'},
    {label: 'University of Technology Sydney', value: 'University of Technology'},
    {label: 'University of Sydney', value: 'University of Sydney'},
    {label: 'University of New South Wales', value: 'University of New South Wales'},
    {label: 'University of Western Sydney', value: 'University of Western Sydney'},
];

const unitsList = [
    {label: 'COMP1300', value: 'COMP1300'},
    {label: 'ACCG3058', value: 'ACCG3058'},
    {label: 'ECON1010', value: 'ECON1010'},
    {label: 'COMP2300', value: 'COMP2300'},
    {label: 'PHYS1300', value: 'PHYS1300'},
];

export default function TutorAppointment({ route, navigation}){

    const {otherParam} = route.params;
    const [title, setTitle]= useState('Appointment');

    const [pay, setPay] = useState('');
    const [hours, setHours] = useState('');

    const [location, setLocation] = useState('');
    const [units, setUnits] = useState('');

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [screen1, setScreen1] = useState(true);
    const [screen2, setScreen2] = useState(false)

  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    };
    const onChange2 = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setTime(currentTime);
      };
   
    const formattedDate = moment(date).format("MMM DD, YYYY"); 
    const formattedTime = moment(time).format("h:mm a"); 

    const chooseButton = () => {
        setTitle('Choose Date and Time');
        setScreen2(true);
        setScreen1(false);
    }

    const chooseButton2 = () => {
        setScreen2(false);
        setScreen1(true);
        setTitle('Appointment')
    }

    return(
       <>
       
            {screen1 &&
            <Appbar.Header style={{backgroundColor: 'white'}}>
                <Appbar.BackAction onPress={() => navigation.navigate('MessageUserTutor')}/>
                <Appbar.Content title={title} titleStyle={{fontSize: 24}}/>
            </Appbar.Header>
            }
           
            
            
            {screen1 &&
              
                <ScrollView>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.title}>Student Name</Text>
                    <Text style={styles.titleDesc}>{otherParam}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.title1}>Time</Text>
                    <Text style={styles.titleDesc1}>{formattedTime}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.title1}>Date</Text>
                    <TouchableOpacity onPress={chooseButton}>
                    <Text style={styles.titleDesc2}>{formattedDate}</Text>
                    </TouchableOpacity>
                   
                
                
                </View>
                
               
                
                <View style={{flexDirection:'row', zIndex: 2 }}>
                    <Text style={styles.title1}>Location</Text>
                    <DropDownPicker
                        items={uniList}
                        defaultValue={location}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        containerStyle={styles.picker}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        dropDownMaxHeight={200}
                        onChangeItem={item => setLocation(item.value)}
                    />
                </View>
                <View style={{flexDirection:'row', zIndex: 1}}>
                    <Text style={styles.title1}>Unit Code</Text>
                    
                    <DropDownPicker
                        items={unitsList}
                        defaultValue={units}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        containerStyle={styles.picker}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        dropDownMaxHeight={200}
                        onChangeItem={item => setUnits(item.value)}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.title1}>Hourly Pay</Text>
                    <TextInput
                        style={styles.titleDesc1}
                        placeholder="Type Hourly Pay"
                        placeholderTextColor="#60605e"
                        numeric
                        keyboardType={'numeric'}
                        value={pay}
                        onChangeText={text => setPay(text)}
                        backgroundColor="white"
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.title1}>Total Hours</Text>
                    <TextInput
                        style={styles.titleDesc1}
                        placeholder="Hours Student Need"
                        placeholderTextColor="#60605e"
                        numeric
                        keyboardType={'numeric'}
                        value={hours}
                        onChangeText={text => setHours(text)}
                        backgroundColor="white"
                    />
                </View>
                <View style={{flexDirection:'row', marginBottom: 10}}>
                    <Text style={styles.title1}>Total Amount</Text>
                    <Text style={styles.titleDesc1}>{pay * hours}</Text>
                </View>
                <View style={{padding: 50, marginBottom: 100}}>
                    <CustomButton 
                        onPress={() => alert("Appointment sent")} 
                        title="Send to Student" 
                        buttonStyle={{borderRadius: 25}}
                    />
                </View>
                <View style={{padding: 100}}>
                    <Text></Text>
                </View>


                 </ScrollView>
            }
            {screen2 &&
            <Appbar.Header style={{backgroundColor: 'white'}}>
                <Appbar.Content title={title} titleStyle={{fontSize: 24}}/>
            </Appbar.Header>
            }
            {
                screen2 && 
                <ScrollView>
                <View style={{ alignSelf: 'center', marginTop: 50, borderWidth: 1, width: windowWidth* .5}}>
                <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date()}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green", }}
                    placeHolderTextStyle={{ color: "black" }}
                    onChange={onChange}
                    value={date}
                    disabled={false}
                    display='spinner'          
                 />
                </View>
                <View style={{alignSelf: 'center'}}>
                     <Text style={{marginVertical: 20, fontSize: 20, fontWeight: 'bold'}}>Date: {formattedDate}</Text>
                </View>
                <View style={{ alignSelf: 'center', marginTop: 50, borderWidth: 1, width: windowWidth* .5}}>
                <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    mode="time"
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select time"
                    textStyle={{ color: "green", }}
                    placeHolderTextStyle={{ color: "black" }}
                    onChange={onChange2}
                    value={time}
                    disabled={false}
                    display='spinner'          
                 />
                 </View>
                 <View style={{alignSelf: 'center'}}>
                     <Text style={{marginVertical: 20, fontSize: 20, fontWeight: 'bold'}}>Time: {formattedTime}</Text>
                </View>
                <View style={{padding: 50, marginBottom: 100}}>
                 <CustomButton
                        onPress={chooseButton2}
                        title='Save'
                        buttonStyle={{width: windowWidth * .7, alignSelf:'center', borderRadius: 25}}
                    />
                 </View>
                 <View style={{padding: 100}}>
                     <Text></Text>
                 </View>
                 </ScrollView>
                

            }

          
          
           
           
           

       </>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        marginLeft: 20,
        padding: 10,
        fontSize: 16,
        borderColor: '#ccc',
        borderWidth: 1,
      //  backgroundColor: 'white',
        color: '#330000',
        width: windowWidth*.3,
    },
    titleDesc: {
        marginTop: 20,
        marginLeft: 0,
        padding: 14,
        fontSize: 16,
        borderColor: '#ccc',
        borderWidth: 1,
      //  backgroundColor: 'white',
        color: '#330000',
        width: windowWidth * .6,
    },
    title1: {
      //  marginTop: 20,
        marginLeft: 20,
        padding: 10,
        fontSize: 16,
        borderColor: '#ccc',
        borderWidth: 1,
      //  backgroundColor: 'white',
        color: '#330000',
        width: windowWidth*.3,
    },
    titleDesc1: {
    //    marginTop: 20,
        marginLeft: 0,
        padding: 14,
        fontSize: 16,
        borderColor: '#ccc',
        borderWidth: 1,
      //  backgroundColor: 'white',
        color: '#330000',
        width: windowWidth * .6,
    },
    titleDesc2: {
        //    marginTop: 20,
            marginLeft: 0,
            padding: 14,
            fontSize: 16,
            borderColor: '#ccc',
            borderWidth: 1,
            backgroundColor: 'white',
            color: '#330000',
            width: windowWidth * .6,
        },
    picker: {
        //    marginTop: 20,
            marginLeft: 0,
        //    padding: 14,
            fontSize: 16,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 0,
          //  backgroundColor: 'white',
            color: '#330000',
            width: windowWidth * .6,
    },
    picker2: {
        backgroundColor: '#fafafa',
        justifyContent: 'center', 
        height: 44, 
        width: windowWidth * .6, 
        borderWidth: 1,
        borderColor: '#ccc'
    },
    timeButton: {
            flex: 1,
            marginTop: 0,
            padding: 14,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 0,
            backgroundColor: '#fafafa',
            color: '#330000',
            width: windowWidth * .6,
            justifyContent: 'flex-start'
    },
    timeButton2: {
        flex: 1,
        marginTop: 0,
        padding: 14,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 0,
        backgroundColor: '#fafafa',
        color: '#330000',
        width: windowWidth * .6,
        height: 60,
},

    

})