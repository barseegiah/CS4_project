import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, StyledFormArea, StyledButton, ButtonText} from './../components/styles.js';
import { URL } from './constants.js';


const {brand, darkLight, primary, tertiary} = colors;


const SignUpScreen = function ({ navigation }) {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        dateOfBirth: "",
        password: "",
        confirmPasword: "",
    })


    const handleSignUp = () => {
        // Validate Required Field | ensures that all fields are required to prevent errors
        if (
            !data.fullName ||
            !data.email ||
            !data.dateOfBirth ||
            !data.password
            
           
        ) {
            Alert.alert('Missing fields', 'You have some missing fields to '),
                [{ text: 'Okay' }];

            return;
        };

        // Check for password match
        if (data.password !== data.confirmPasword) {
            Alert.alert(
                'Password Mismatch', 'Password and Comfirm Password did not match',
                [{ text: 'Okay' }]
            );
            return;
        };

        console.log("clicking");
        // Make axios request to API only if the above condition is meet
        axios.post(`${URL}/register`,
            {
                fullname: data.fullName,
                email: data.email,
                dateOfBirth: data.dateOfBirth,
                password: data.password,
            }, {
            headers: { 'Content-Type': 'application/json' }
        }
        ).then((response) => {
            console.log('Response!', response.data)

            const jsonValue = JSON.stringify(response.data)
            console.log('value', jsonValue)
            AsyncStorage.setItem('userData', jsonValue)



            // Alert Message
            Alert.alert(
                'Account Created Succefully', 'Please Login In',
                [{ text: 'Okay' }]
            )

            // Navigate to Sign In screen
            navigation.navigate('Login')

        }).catch((err) => {
            console.log('Error!', err.response.data)

            // Handle error cases
            if (err.response && err.response.data && err.response.data.message) {
                Alert.alert(
                    'Registration Error', err.response.data.message,
                    [{ text: 'Okay' }]
                )
            }
        });

    };

    return (
        // <KeyboardAvoidingView behavior='padding'
        //     keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 70}
        //     style={styles.container}
        // >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
                ScrollView showsVerticalScrollIndicator={false}
                style={{ ...styles.container, paddingTop: 130, paddingHorizontal: 20, }}
            >
                <Text style={styles.signInText}>Account Singup</Text>

                <View style={{ marginBottom: 130 }}>
                 
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        value={data.fullName}
                        onChangeText={(val) => setData({ ...data, fullName: val })}
                        // placeholderTextColor="#eee"
                    />

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
                        placeholder=" Date of Birth"
                        value={data.dateOfBirth}
                        onChangeText={(val) => setData({ ...data, dateOfBirth: val })}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={data.password}
                        // secureTextEntry={true}  // Set to true to hide text content
                        onChangeText={(val) => setData({ ...data, password: val })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        value={data.confirmPasword}
                        // secureTextEntry={true}  // Set to true to hide text content
                        onChangeText={(val) => setData({ ...data, confirmPasword: val })}
                    />
                     
                <TouchableOpacity style={styles.buttonText}
                 onPress={handleSignUp}>
                   <TouchableOpacity style={styles.addButton}
                        onPress={handleSignUp}
                    >
                        <Text style={styles.buttonText}>Create Account</Text>
                    </TouchableOpacity>

                </TouchableOpacity>
                        {/* <Text style={styles.buttonText}>Create Account</Text> */} 
                   
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
        // {/* </KeyboardAvoidingView> */ }

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff', // Background color
    },
    signInText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black', // Text color
        marginBottom: 20,
        alignSelf: "center"

    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#FFB000', // Input border color
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 20,
        paddingHorizontal: 10,
        color: 'black',
        padding: 10, 
        marginBottom: 20,
        borderRadius: 8, 
        height: 60,
        marginTop: 2, 
    },

    option: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    optionText: {
        color: '#fff',
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
        color: '#ffffff',
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

export default SignUpScreen;
