import { View, Text, Dimensions,Image, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../styles';
import OptionItem from './OptionItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { enrollCourse } from '../../Services';


const {brand, darkLight, primary, green} = colors;
export default function DetailSection({course, enrollCourse}) {
  return (
    <View style={{padding:10,borderRadius:15,backgroundColor:primary}}>
{/* calling & designing corse image */}
      <Image source={{uri:course?.bannerForLeadership?.url}}
      style={{width:Dimensions.get('screen').width*0.84, height:190,
      borderRadius:15}}/>

    <View style={{padding:10}}>
     <Text style={{fontSize:20, fontWeight: 'bold',
    marginTop:10}}>{course.name}</Text>
{/* displaying properties from OptionItem.py */}
    <View>
        <View style={style.rowStyle}>
        <OptionItem icon={'book-outline'} vale={course.chapters?.length+"Chapters"} />
        <OptionItem icon={'time-outline'} vale={course.time} />
        </View>

        <View style={style.rowStyle}>
        <OptionItem icon={'person-circle-outline'} vale={course.author} />
        <OptionItem icon={'cellular-outline'} vale={course.level}/> 
        </View> 
    </View>
    <View>
        <Text style={{fontWeight: 'bold'}}>
            Description
        </Text>
        <Text style={{fontStyle:'italic', lineHeight:23}}>{course?.description?.markdown}</Text>
    </View>
    <View style={{display:'flex', flexDirection: 'row', gap: 10}}>
        <TouchableOpacity 
        onPress={()=>enrollCourse()}
        style={{padding:20, backgroundColor: brand, borderRadius:15}}>

            <Text style={{fontWeight:'bold',textAlign: 'center', fontSize: 14}}>Enroll For Free</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding:20, backgroundColor: green, borderRadius:15}}>
            <Text style={{fontWeight:'bold',textAlign: 'center', fontSize: 14}}>$2.99/Month</Text>
        </TouchableOpacity>
    </View>
    </View>
    </View>
  )
}

// Styling for optionItem
const style = StyleSheet.create({
    rowStyle:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 10,
    }
})