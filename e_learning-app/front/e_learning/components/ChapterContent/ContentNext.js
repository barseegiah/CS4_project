import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { colors, darkLight } from '../styles'; // Assuming styles are imported from a separate file
import { useNavigation } from '@react-navigation/native'


const ContentPage = () => {
    const navigation = useNavigation(); 
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <StatusBar barStyle='light-content' backgroundColor={darkLight} />
      <View style={styles.container}>
        {/* Lesson Content */}
        <View style={styles.lessonContainer}>
          <Text style={styles.lessonTitle}>Python Introduction</Text>
          <Text style={styles.lessonText}>
            Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built-in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy-to-learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms and can be freely distributed.
          </Text>
        </View>

        {/* Code Block */}
        <View style={styles.codeContainer}>
          <Text style={styles.code}>Cconsole.log('Who are you')</Text>
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.option} onPress={() => navigation.goBack("CourseDetailScreen")}>
          <MaterialIcons name='navigate-next' size={24} color={colors.primary} />
          <Text style={styles.optionLabel}>Done</Text>
        </TouchableOpacity>

        {/* Rest of your content items */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingBottom: 20, // Add padding for better scrolling experience
  },
  container: {
    padding: 20,
  },
  lessonContainer: {
    marginBottom: 20,
  },
  lessonTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lessonText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  codeContainer: {
    backgroundColor: '#000', // Black background for code
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#fff', // White text for better readability
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // Use white background for button
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#ccc', // Add subtle shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  optionLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ContentPage;
