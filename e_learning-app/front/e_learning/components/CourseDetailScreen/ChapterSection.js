import { View, Text} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const {brand, darkLight, primary} = colors;


export default function ChapterSection({ chapterList, userEnrolledCourse }) {
  const navigation = useNavigation();

  const navigateToChapterContent = () => {
    navigation.navigate("ChapterContentScreen");
  };
  
  return (
    <View style={{padding: 10, color: primary, marginTop: 20, borderRadius:15}} >
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Chapters</Text>
      {chapterList.map((item, index) => (
        <TouchableOpacity
          key={index} 
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 15,
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
          }}
            onPress={navigateToChapterContent}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 27 }}>{index + 1}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 21 }}>{item.title}</Text>
          </View>
          {userEnrolledCourse?.length==0? <Ionicons name="md-lock-closed" size={25} color="black" />
          
          :
          <Ionicons name="play" size={25} color="black" />
        }
        </TouchableOpacity>
      ))}
    </View>
  );
}


