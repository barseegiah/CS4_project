import { View, Text, StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import { StyledContainer }from './../components/styles.js';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../components/CourseDetailScreen/DetailSection.js';
import ChapterSection from '../components/CourseDetailScreen/ChapterSection.js';
import { enrollCourse } from '../Services/index.js';
import { useUser } from '@clerk/clerk-expo';


export default function CourseDetailScreen() {
    const navigation=useNavigation();
    const params=useRoute().params;
    const {user}=useUser();

    // To access the course information
    useEffect(() => {
        console.log(params.course)
    },[])

    const UserEnrollCourse = () => {
      // Check if user and primaryEmailAddress are defined and not null
      if (user && user.primaryEmailAddress) {
        enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress)
          .then(resp => {
            console.log(resp);
          })
          .catch(error => {
            console.error('Enroll course error:', error);
          });
      } else {
        console.error('User or primaryEmailAddress is null or undefined.');
      }
    };
  

  return params.course&&(
    <ScrollView>
      <StyledContainer />
         {/* <StyledContainer>
         </StyledContainer> */}
    <ScrollView style={{padding:20}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <DetailSection course={params.course} enrollCourse={()=>UserEnrollCourse()}/>
        <ChapterSection chapterList={params.course.chapters}/>
   
    </ScrollView>
   
    </ScrollView>
  )
}


