import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


// Screens
import MyCourse from '../screens/MyCourse';
import LeaderBoard from '../screens/LeaderBoard';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RootStack from './RootStack';



const Tab=createBottomTabNavigator();


export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>

      <Tab.Screen name='Home' component={HomeScreen} 
      options={{
        tabBarIcon: () => <FontAwesome5 name="home" size={26} color="#FFB000" />,
      }}/>

      <Tab.Screen name='My-course' component={MyCourse} 
      options={{
        tabBarIcon: () => <Feather name="book-open" size={26} color="#FFB000" />,
      }}/>

      {/* <Tab.Screen name='Leaderboard' component={LeaderBoard} 
      options={{
        tabBarIcon: () => <MaterialIcons name="leaderboard" size={26} color="#FFB000" />,
      }}/> */}

      <Tab.Screen name='Profile' component={ProfileScreen} 
      options={{
        tabBarIcon: () => <MaterialIcons name="supervised-user-circle" size={26} color="#FFB000" />,
      }}/>

    </Tab.Navigator>
  );
}

