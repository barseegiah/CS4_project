import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/HomeScreen/Header';
import { colors } from './../components/styles.js';
import SearchBar from '../components/SearchBar.js';
import CourseList from '../components/HomeScreen/CourseList.js';

const { brand } = colors;

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerBackground} />
      {/* <Header style={{ zIndex: 1 }} /> */}
      <SearchBar />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.courseListContainer}>
          <View style={{ marginBottom: 20 }}>
            <CourseList level={'Basic '} />
          </View>
          <View style={{ marginBottom: 20 }}>
            <CourseList level={'Advance '} />
          </View>
          <CourseList level={'Moderate '} />
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

