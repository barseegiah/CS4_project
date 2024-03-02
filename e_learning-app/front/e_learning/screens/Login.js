import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';


// formik
import { Formik } from 'formik';

// icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle, 
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent
} from './../components/styles.js';
import { View, Text } from 'react-native';

// Colors
const {brand, darkLight, primary} = colors;


const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('../assets/tech.png')} />
        {/* <PageTitle>H-Tech University</PageTitle> */}
        <SubTitle>Account Login</SubTitle>

        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate("Home");
            }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <StyledFormArea>
                <MyTextInput
                    label="Email Address"
                    icon="mail"
                    placeholder="giah@gmail.com"
                    placeholderTextColor = {darkLight} 
                    onChangeText = {handleChange('email')}
                    onBlur = {handleBlur('email')}
                    value = {values.email}
                    keyboardType = "email-address"
                />

               <MyTextInput
                    label="Password"
                    icon="lock"
                    placeholder="***********"
                    placeholderTextColor = {darkLight} 
                    onChangeText = {handleChange('password')}
                    onBlur = {handleBlur('password')}
                    value = {values.password}
                    secureTextEntry = {hidePassword}
                    isPassword = {true}
                    hidePassword = {hidePassword}
                    setHidePassword = {setHidePassword}
                />
                <MsgBox>...</MsgBox>
                  <StyledButton  onPress={() => navigation.navigate("TabNavigation")}>
                  <ButtonText >
                    Login
                  </ButtonText>
                </StyledButton>
                <Line/>

                {/* Google Singin */}
                <StyledButton google={true} onPress={handleSubmit}> 
                    <Fontisto name= "google" color={primary} size={25} />
                  <ButtonText google={true}>
                    Singin with Google
                  </ButtonText>
                </StyledButton>
                <ExtraView>
                    <ExtraText>Don't have an account?</ExtraText>
                    <TextLink onPress={() => navigation.navigate("Singup")}>
                      <TextLinkContent>Singup</TextLinkContent>
                    </TextLink>
                </ExtraView>
            </StyledFormArea>
        )}
            
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
  return (
    <View>
         <LeftIcon>
            <Octicons name={icon} size={20} color={brand} />
         </LeftIcon>
         <StyledInputLabel>{label}</StyledInputLabel>
         <StyledTextInput {...props}
              style={{
                backgroundColor: 'lightgray', 
                padding: 10, 
                borderRadius: 8, 
                marginTop: 4, 
              }}
         />
         {isPassword && (
          <RightIcon onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20} color={darkLight}/>
          </RightIcon>
         )}
    </View>

  )

}

export default Login;
