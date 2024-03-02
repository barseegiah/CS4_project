import { View, Text, Image} from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { colors } from "../styles";

const { brand, darkLight, primary } = colors;

export default function CourseItem({item}) {
  return (
    <View style={{ padding: 10, backgroundColor: primary, marginRight: 10, borderRadius: 15 }}>
            <Image
              source={{ uri: item?.bannerForLeadership?.url }}
              style={{ width: 200, height: 120, borderRadius: 1 }}
            />
            <View style={{ padding: 7 }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{item.name}</Text>
            </View >
            <View style={{display:'flex', flexDirection: 'row',
        justifyContent:'space-between'}}>
            {/* Displaying course information */}
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5, paddingTop: 3 }}>
              <Feather name='book-open' size={18} color='black' />
              <Text>{item?.chapters?.length} Chapters</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5, paddingTop: 3 }}>
              <Feather name='clock' size={18} color='black' />
              <Text>{item?.time}</Text>
            </View>
          </View>
          <Text style={{marginTop:5, color:brand, fontWeight: 'bold',
            fontSize: 15
            }}>{item.price==0? 'Free':item.price}</Text>
          </View>
  )
}