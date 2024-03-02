import { TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services";
import SubHeading from "../SubHeading";
import { FlatList } from "react-native-gesture-handler";
import CourseItem from "./CourseItem";
import { useNavigation } from "@react-navigation/native";


// useEffect
export default function CourseList({ level }) {
  const [CourseList, setCourseList] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);

  const navigation=useNavigation();

  const getCourses = () => {
    getCourseList(level).then((resp) => {
      console.log("RESP--", resp);
      setCourseList(resp?.courses);
    });
  };
  return (
    <View>
      <SubHeading text={level + " Courses"} />

      {/* Using flatlist */}
      <FlatList
        data={CourseList}
        key={CourseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('course-detail', {
            course:item
          })}>
            <CourseItem item={item}/>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
