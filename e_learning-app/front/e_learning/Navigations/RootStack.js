import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import MyCourse from '../screens/MyCourse';
import LeaderBoard from '../screens/LeaderBoard';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Login from '../screens/Login';
import Singup from "../screens/Singup";
import TabNavigation from "./TabNavigation";
import CourseDetailScreen from "../screens/CourseDetailScreen";
import ChapterContentScreen from "../screens/ChapterContentScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ContentNext from "../components/ChapterContent/ContentNext";
import Content from "../components/ChapterContent/Content";
import Payment from "../screens/Payment";

const Stack = createStackNavigator();

const RootStack = () => {
    return(
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login"
          screenOptions={{
            headerShown:false
        }}>
               <Stack.Screen name="Login" component={Login}/>
               <Stack.Screen name="Singup" component={Singup}/>
               <Stack.Screen name="Home" component={HomeScreen}/>
               <Stack.Screen name="Courses" component={MyCourse}/>
               <Stack.Screen name="LeaderBoard" component={LeaderBoard}/>
               <Stack.Screen name="Profile" component={ProfileScreen}/>
               <Stack.Screen name="TabNavigation" component={TabNavigation}/>
               <Stack.Screen name='course-detail' component={CourseDetailScreen}/>
               <Stack.Screen name="ChapterContentScreen" component={ChapterContentScreen}/>
               <Stack.Screen name="EditProfileScreen" component={EditProfileScreen}/>
               <Stack.Screen name="ContentNext" component={ContentNext}/>
               <Stack.Screen name="Content" component={Content}/>
               <Stack.Screen name="Payment" component={Payment}/>
          </Stack.Navigator>
      </NavigationContainer>
    )
  }

  export default RootStack;