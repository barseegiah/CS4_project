import React, { useContext } from 'react';
import { StyledContainer } from '../styles';
import { Text, View, Image} from 'react-native';
// import { AuthContext } from '../../Context/AuthContext';
import {colors} from '../../components/styles.js';




const {brand, darkLight, primary} = colors;
export default function Header() {
  // const contextValue = useContext(AuthContext);

  // if (contextValue === null) {
    // Handle the case where the context value is null
    return (
    <View>
      <View>
        <StyledContainer>
        </StyledContainer>
        <View style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 20, height:35}}>
          <Text>Welcome Giahseymehn!</Text>
          
        </View>
      </View>
          
      </View>
       
    );
  }





// const { userData, setUserData } = contextValue;

//   return (
//     <View>
//       <StyledContainer>
//       </StyledContainer>
//       <View>
//         <Text>Hello</Text>
//         <Text>{userData?.name}</Text>
//       </View>
//       <Image source={{uri:userData?.picture}}
//       style={{width:40, height:40, borderRadius:100}}
//       />
//     </View>
    
//   );
// }