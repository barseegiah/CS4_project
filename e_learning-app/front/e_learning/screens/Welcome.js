import React from 'react';
import { StatusBar } from 'expo-status-bar';


import {
  InnerContainer,
  PageLogo,
  PageTitle, 
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar
} from './../components/styles.js';



const Welcome = () => {


  return (
    <>
      <StatusBar style="dark" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('../assets/tech.png')} />
        <WelcomeContainer>
            <PageTitle welcome={true}>Welcome Buddy</PageTitle>
            <SubTitle welcome={true}>Florence Kollie</SubTitle>
            <SubTitle welcome={true}>florencek@gmail.com</SubTitle>

            <StyledFormArea>
            <Avatar resizeMode="cover" source={require('../assets/tech.png')} />

            <Line/>
                <StyledButton onPress={() => {}}> 
                  <ButtonText>
                    Logout
                  </ButtonText>
                </StyledButton>

            </StyledFormArea>
            
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
