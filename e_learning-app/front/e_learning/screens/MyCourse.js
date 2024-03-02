import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { StyledContainer } from './../components/styles.js';
import { colors } from './../components/styles.js';
import CourseList from '../components/HomeScreen/CourseList.js';
import Header from '../components/HomeScreen/Header';

const { brand } = colors;

export default function HomeScreen() {
  return (
    <View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.courseListContainer}>
          <View style={{ marginBottom: 20 }}>
          <Text>Courses in progress</Text>           
           <CourseList level={'Basic'} />
         
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingTop: 0,
  },
  headerBackground: {
    backgroundColor: brand,
    height: 250,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  courseListContainer: {
    padding: 5,
  },
});

