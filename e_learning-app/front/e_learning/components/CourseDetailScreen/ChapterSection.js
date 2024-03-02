import { View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles';


const {brand, darkLight, primary} = colors;

export default function ChapterSection({ chapterList }) {
  return (
    <View style={{padding: 10, color: primary, marginTop: 20, borderRadius:15}} >
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Chapters</Text>
      {chapterList.map((item, index) => (
        <View
          key={index} 
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15,
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 27 }}>{index + 1}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 21 }}>{item.title}</Text>
          </View>
          <Ionicons name="md-lock-closed" size={25} color="black" />
        </View>
      ))}
    </View>
  );
}


