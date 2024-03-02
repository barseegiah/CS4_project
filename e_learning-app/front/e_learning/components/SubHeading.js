import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function SubHeading({text}) {
  return (
    <View>
    <Text style={{
       fontWeight: 'bold', fontSize: 24,
    }}>{text}</Text>
    </View>
  )
}