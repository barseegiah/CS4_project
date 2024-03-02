import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity, tertiary, secondary} from 'react-native';

// colors
export const colors = {
  primary: '#ffffff',
  secondary: '#FFB000',
  tertiary: '#F5F5DC',
  darkLight: '#9CA3AF',
  brand: '#FFB000',
  green: '#20ad07',
  red: '#B31312',
};

const { primary, brand, green, darkLight } = colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 10px; 
  background-color: ${primary};
  marginTop: 0px
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px; 
    justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 300px;
  height: 200px;
  justify-content: center;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const  WelcomeImage = styled.Image`
    width: 50px;
    min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 0px;

  ${(props) => props.welcome &&`
      font-size: 35px;
  `}
`;

export const SubTitle = styled.Text`
    font-size: 15px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
    top: 25px;

  ${(props) => props.welcome &&`
      margin-bottom: 5px; 
      font-width: normal;
  `}
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${primary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 0px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    padding: 2px;
    top: 64px;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 62px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-verticle: 5px;
    height: 60px;
    top: 3px;


    ${(props) => props.google == true && `
      background-color: ${green};
      flex-direction: row;
      justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 15px;

    ${(props) => props.google == true && `
    padding: 3px;
  `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    top: 0px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 8px;
    top: 3px;
`;

export const ExtraView = styled.View`
justify-content: center;
align-items: center;
padding: 10px;
`;

export const ExtraText = styled.Text`
justify-content: center;
align-items: center;
color: ${tertiary};
font-size: 15px;
top: 0px;
`;

export const TextLink = styled.TouchableOpacity`
justify-content: center;
align-items: center;
`;

export const TextLinkContent = styled.Text`
color: ${brand};
font-size: 15px;
top: 0px;
align-items: center;
`;
