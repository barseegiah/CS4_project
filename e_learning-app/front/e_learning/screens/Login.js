import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import axios from 'axios';
import { URL } from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// formik
import { Formik } from 'formik';

// icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
  PageLogo,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent
} from './../components/styles.js';


const SignInScreen = function ({ navigation }) {
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleSignIn = async () => {
        try {
          // Validate input
          if (!data.email || !data.password) {
            throw new Error('Email and Password are required');
          }
      
          // Make a request to your API for user login
         // Make a request to your API for user login
      const response = await axios.post(`${URL}/login`, {
        email: data.email,
        password: data.password
      }, {
        headers: { 'Content-Type': 'application/json' }
      });

      
          // Get Access Token, Refresh Token, id, and lastname from the response
          const { access_token, email, id,  refresh_token } = response.data;
      
          // Save tokens and user information to AsyncStorage for future requests
          await AsyncStorage.multiSet([
            ['accessToken', access_token],
            ['refreshToken', refresh_token],
            ['UserId', String(id)],
     ]);
         //console log the data out 
         console.log(response.data);
          // Navigate to the authenticated screen
          navigation.navigate('TabNavigation');
        } catch (error) {
          // Handle login failure
          console.error('Login failed:', error);
      
          // Display an error message to the user
          Alert.alert('Login Failed', error.message || 'Invalid username or password.');
        }
    

        // Make a request to your API for user login
        axios.post(`${URL}/login`, {
            email: data.email,
            password: data.password

        }, {
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            console.log('Response!', response.data)

            // Get Acess, Refresh Token, id
            const { access_token, refresh_token, id, firstname } = response.data;

            // Save the tokens to AsyncStorage for future requests
            AsyncStorage.setItem('accessToken', access_token);
            AsyncStorage.setItem('refreshToken', refresh_token);
            AsyncStorage.setItem('UserId', String(id));
            AsyncStorage.setItem('userName', firstname);

            // Navigate to the authenticated
            navigation.navigate('TabNavigation')

        }).catch((err) => {
            // Handle login failure
            console.log('Login failed', err.response);

            // Display an error message to the user
            Alert.alert('Login Failed', 'Invalid username or password.');

        });
    };

    return (
        // <KeyboardAvoidingView behavior='padding'
        //     keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 70}
        //     style={styles.container}
        // >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView
                SafeAreaView showsVerticalScrollIndicator={false}
                style={{ ...styles.container, paddingHorizontal: 35, }} // paddingTop: 130,
            >
                  <PageLogo  source={require('../assets/tech.png')} />
                 
                <Text style={styles.signInText}>LOGIN</Text>
                <View style={styles.form}>
                
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={data.email}
                        onChangeText={(val) => setData({ ...data, email: val })}

                        autoCapitalize="none" // Ensure email is not auto-capitalized
                        keyboardType="email-address" // Set keyboard type to email address for better user experience
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={data.password}
                        onChangeText={(val) => setData({ ...data, password: val })}
                        secureTextEntry={true} // Set to true to hide text content
                    />

                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={handleSignIn}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.option}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUp')}
                    >
                    <ExtraView>
                    <TextLink onPress={() => navigation.navigate("Singup")}>
                       <ExtraText>Don't have an account?  <TextLinkContent>Singup</TextLinkContent></ExtraText>
                      
                        
                       </TextLink>
                  </ExtraView>
                        {/* <TextLink onPress={() => navigation.navigate("Singup")}>
                      <TextLinkContent>Singup</TextLinkContent>
                    </TextLink> */}
                      
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate('UpdatePasword')}
                    >
                        <Text style={styles.optionText}>Forget Password?</Text>
                    </TouchableOpacity> */}
                </View>
                
            </SafeAreaView>
        </TouchableWithoutFeedback>
        // </KeyboardAvoidingView>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white', // Background color
        // padding: 10,  // All sides are 10
        // paddingHorizontal: 50,  // Left and right are 20
    },
    signInText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black', // Text color
        marginBottom: 20,
        alignSelf: "center"

    },
    form: {
        justifyContent: "space-between",
        alignContent: "center"
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#FFB000', 
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 20,
        paddingHorizontal: 10,
        color: 'black',
        marginBottom: 20,
        height: 60,
    },

    option: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    optionText: {
        color: 'black',
        marginTop: 15,
    },

    addButton: {
        padding: 15,
         backgroundColor: '#FFB000',
         justifyContent: 'center',
         alignItems: 'center',
         borderRadius: 5,
         marginVerticle: 5,
         height: 60,
         top: 3,
    },
    
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    button: {
        borderRadius: 10, // Set the border radius
        borderWidth: 2, // Set the border width
        borderColor: '#3498db', // Set the border color to blue
        padding: 10, // Add some padding for better visual appearance
    },
});

export default SignInScreen;






