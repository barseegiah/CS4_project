import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView } from 'react-native';



export default function SearchBar() {
  return (
    <View style={styles.container}>
    <FontAwesome name="search" size={24} color="black" style= {{marginRight: 15}}/>
    <TextInput placeholder='Search'/>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 99,
      elevation: 5,
      marginTop: 28,
      marginBottom: 7,
      alignItems: 'center'
    }
})
