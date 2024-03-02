import React, { useContext , useState, useEffect} from "react";
import { View, Image, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5, AntDesign, MaterialIcons  } from "@expo/vector-icons";
// import { AuthContext } from '../../Context/AuthContext';
import { brand, darkLight, primary } from "./../components/styles";
import Screen from "./../components/Screen";
import getProfileData from "../Services/ProfileServices/getProfileData";
import AsyncStorage from "@react-native-async-storage/async-storage";


const { fontSize, padding } = Platform.OS === "ios" ? { fontSize: 16, padding: 10 } : { fontSize: 14, padding: 8 }; // Adjust styling based on platform

 function ProfileScreen ({navigation}) {
  const [profileData, setProfileData] = useState({
    fullname: "John Doe",
    email: "johndoe@example.com",
    dateOfBirth: "1990-01-01",
  });

   // Fetch user information when the component mounts
   useEffect(() => {
    console.log("In useEffect");
  
    const fetchProfile = async () => {
      console.log("Calling fetchProfile");
  
      try {
        const storedUserId = await AsyncStorage.getItem('UserId');
        console.log("Stored User ID:", storedUserId);
  
        const userProfileData = await getProfileData(parseInt(storedUserId, 10));
        setProfileData(userProfileData);
        console.log("Profile data:", userProfileData);
      } catch (error) {
        // Handle specific errors from API or getProfileData (optional)
        console.error('Error fetching profile data:', error);
      }
    };
  
    console.log("Calling fetchProfile from useEffect");
    fetchProfile();
  
  }, []);
  

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={darkLight} />
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../assets/user.png")}
          style={styles.profileImage}
          // Add accessibility label for screen readers:
          accessibilityLabel='Profile picture'
        />
      </View>
      <View style={styles.profileTextContainer}>
        <Text style={styles.profileName}>{profileData.fullname}</Text>
        {/* Add more profile details as needed */}
      </View>
      <View>
        <Text style={styles.detailHeader}>Details</Text>

        <View style={styles.courseItem}>
          <FontAwesome5 name="envelope" size={26} color="#FFB000" />
          <Text style={styles.courseName}>{profileData.email}</Text>
        </View>

        <View style={styles.courseItem}>
          <FontAwesome5 name="calendar" size={26} color="#FFB000" />
          <Text style={styles.courseName}>{profileData.dateOfBirth}</Text>
        </View>
        <View style={styles.courseItem}>
          <FontAwesome5 name="book-open" size={26} color="#FFB000" />
          <Text style={styles.courseName}>Python</Text>
        </View>
      </View>

      <View style={styles.profileOption}>
                <TouchableOpacity
                    style={styles.option}
                    onPress={() => navigation.navigate('EditProfileScreen')}
                >
                    <AntDesign name="user" size={24} color="black" />
                    <Text style={styles.optionLabel}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.option}
                onPress={() => navigation.navigate('Login')}
                >
                    <MaterialIcons name="logout" size={24} color="black" />
                    <Text style={styles.optionLabel}>Logout</Text>
                </TouchableOpacity>

            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container take up the entire screen
    backgroundColor: darkLight,
    padding: padding, // Apply consistent padding based on platform
  },
  profileImageContainer: {
    // Center the image horizontally
    marginTop: 20, // Add top margin
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileTextContainer: {
    // Center the text horizontally
    marginTop: 20, // Add top margin
  },
  profileName: {
    fontSize: 20,
    color: brand,
    fontWeight: "700",
  },

  detailHeader: {
    marginTop: 20,
    fontSize: 20,
    color: brand,
    fontWeight: "700",
  },

  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Adjust spacing as needed
  },
  courseName: {
    marginLeft: 10, // Adjust spacing as needed
    fontSize: 18,
    color: primary,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff'
},
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#eee',
    padding: 15,
    // marginTop: 20,
    gap: 15
},


});

export default ProfileScreen;
