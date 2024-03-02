import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Keyboard, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';

const EditProfileScreen = () => {
    // Dummy data for profile information

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setdateOfBirth] = useState("");

    const [isLoading, setIsLoading] = useState(true);

    const handleEditUserDetails = () => {
        // Handle edit task here
        console.log('User Updated successfully:', { fullName, email, dateOfBirth, });
    };

    useEffect(() => {
        // Load user data from AsyncStorage
        const loadData = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                console.log(userData)

                if (userData !== null) {
                    const { fullName, email, dateOfBirth, } = JSON.parse(userData);
                    // console.log(firstName, lastName)
                    setFullName(fullName);
                    setEmail(email);
                    setdateOfBirth(dateOfBirth);
                }

                setIsLoading(false);

            } catch (error) {
                console.error('Error loading user data:', error);
            }
        };

        loadData();
    }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount in class components

    return (
        // <KeyboardAvoidingView behavior='padding'
        //     keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 70}
        //     style={styles.container}
        // >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {
                // Loader while fetching data
                isLoading ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>

                ) : (
                    <ScrollView
                        ScrollView showsVerticalScrollIndicator={false}
                        style={{ paddingLeft: 35, paddingRight: 35 }}
                    >
                        <View style={{marginTop: 30, marginBottom: 30 }}>
                            <View style={styles.profileInfo}>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.label}>Full Name:</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={fullName}
                                        onChangeText={(text) => setFullName(text)}
                                    />
                                </View>
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.label}>Email:</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={email}
                                        onChangeText={(text) => setEmail(text)}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.label}>Date Of Birth:</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={dateOfBirth}
                                        onChangeText={(text) => setdateOfBirth(text)}
                                    />
                                </View>

                            </View>
                         <View>
                            <TouchableOpacity style={styles.addButton}
                                onPress={() =>handleEditUserDetails()}
                            >
                                <Text style={styles.buttonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                )
            }

        </TouchableWithoutFeedback>
        // </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingLeft: 35,
        // paddingRight: 35,
        backgroundColor: '#fff',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginBottom: 20,
    },
    profileInfo: {
        width: '100%'
    },
    label: {
        fontWeight: 'bold',
    },
    inputContainer: {
        marginBottom: 25,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#FFB000', // Input border color
        borderBottomWidth: 2,
    },

    addButton: {
        backgroundColor: '#FFB000',
        padding: 13,  // All sides are 10
        paddingHorizontal: 20,  // Left and right are 20
        borderRadius: 15,
        marginTop: 20,
        width: '100%',
        alignSelf: 'center',
        Radius: 10, // Set the border radius
        padding: 10, // Add some padding for better visual appearance
        height: 60,
        justifyContent: 'center',
        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default EditProfileScreen;
