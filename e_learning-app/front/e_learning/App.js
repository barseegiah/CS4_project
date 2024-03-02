// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import TabNavigation from './Navigations/TabNavigation';
// import Login from './screens/Login';
// import MyCourse from './screens/MyCourse';
// import RootStack from './Navigations/RootStack';
// import ClerkProviderWrapper from './Services/ClerkProvider';

// function App() {
//   return  
//   <ClerkProviderWrapper>
//     <RootStack/>
//   </ClerkProviderWrapper>
// };

// export default App;


// App.js or your entry file
import React from 'react';
import RootStack from './Navigations/RootStack';
import { ClerkProvider } from '@clerk/clerk-expo';
const App = () => {
  return (
    <ClerkProvider publishableKey={"pk_test_b3B0aW11bS1zZWFzbmFpbC03Ni5jbGVyay5hY2NvdW50cy5kZXYk"}>
     <RootStack/>
    </ClerkProvider>
  );
};

export default App;




