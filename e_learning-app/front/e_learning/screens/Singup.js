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
import { View, TouchableOpacity } from 'react-native';

// Colors
const {brand, darkLight, primary, tertiary} = colors;

// Date Time Picker
import DateTimePicker from '@react-native-community/datetimepicker';


const Singup = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

//   Actural date of birth to be sent
const [dob, setDob] = useState();

const onChange = (event, seletedDate) => {
    const currentDate = seletedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
}

const showDatePicker = () =>{
    setShow(true);
}


  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <SubTitle>Account Singup</SubTitle>

{/* Date Time component */}
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      )}

        <Formik
            initialValues={{fullName: '', email: '', dateOfBirth: '', password: '',
            confirmPassword: ''}}
            onSubmit={(values) => {
              console.log(values);
            }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <StyledFormArea>
                <MyTextInput
                    label="Full Name"
                    icon="person"
                    placeholder="Florence Kollie"
                    placeholderTextColor = {darkLight} 
                    onChangeText = {handleChange('fullName')}
                    onBlur = {handleBlur('fullName')}
                    value = {values.fullName}
                />

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
                    label="Date of Birth"
                    icon="calendar"
                    placeholder="YYYY - MM - DD"
                    placeholderTextColor = {darkLight} 
                    onChangeText = {handleChange('dateOfBirth')}
                    onBlur = {handleBlur('dateOfBirth')}
                    value = {dob ? dob.toDateString() : ''}
                    isDate = {true}
                    editable = {false}
                    showDatePicker = {showDatePicker}
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

                <MyTextInput
                    label=" Confirm Password"
                    icon="lock"
                    placeholder="***********"
                    placeholderTextColor = {darkLight} 
                    onChangeText = {handleChange('Confirm Password')}
                    onBlur = {handleBlur('confirmPassword')}
                    value = {values.confirmPassword}
                    secureTextEntry = {hidePassword}
                    isPassword = {true}
                    hidePassword = {hidePassword}
                    setHidePassword = {setHidePassword}
                />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}> 
                  <ButtonText>
                    Singup
                  </ButtonText>
                </StyledButton>
                <Line/>

                {/* Google Singin */}
                <ExtraView>
                    <ExtraText>Already have an account?</ExtraText>
                    <TextLink>
                      <TextLinkContent>Login</TextLinkContent>
                    </TextLink>
                </ExtraView>
            </StyledFormArea>
        )}
            
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
  return (
    <View>
         <LeftIcon>
            <Octicons name={icon} size={20} color={brand} />
         </LeftIcon>
         <StyledInputLabel>{label}</StyledInputLabel>
         {!isDate && <StyledTextInput {...props}
              style={{
                backgroundColor: 'lightgray', 
                padding: 10, 
                borderRadius: 8, 
                marginTop: 4, 
              }}
         />}
         {isDate && <TouchableOpacity onPress={showDatePicker}>
         <StyledTextInput {...props}
        //  Input field design
              style={{
                backgroundColor: 'lightgray', 
                padding: 10, 
                borderRadius: 8, 
                marginTop: 4, 
              }}
         />
            </TouchableOpacity>}
         {isPassword && (
          <RightIcon onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20} color={darkLight}/>
          </RightIcon>
         )}
    </View>

  )

}

export default Singup;
