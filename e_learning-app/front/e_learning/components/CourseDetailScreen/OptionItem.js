import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons} from '@expo/vector-icons';

export default function OptionItem({icon, vale}) {
  return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5, paddingTop: 3 }}>
        <Ionicons name={icon} size={24} color="black" />
        <Text>{vale}</Text>
        </View>
   
  )
}