import React from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { NavigationContainer } from '@react-navigation/native';


const Login = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal: 10}}
        {...props}
    >
        <Text style={{fontSize: 16}}>LOGIN</Text>
    </TouchableOpacity>
);

const SignUp = ({...props}) => (
    <TouchableOpacity
    style={{marginHorizontal: 10}}
    {...props}
>
    <Text style={{fontSize: 16}}>SIGN UP</Text>
</TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
    style={{marginHorizontal: 10}}
    {...props}
>
    <Text style={{fontSize: 16}}>NEXT</Text>
</TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        onDone={() => navigation.navigate("Login")}
        onNext={() => navigation.navigate("Login")}
        DoneButtonComponent={Login}
        SkipButtonComponent={SignUp}
        NextButtonComponent={Next}
        pages={[
          {
            backgroundColor: '#C6FDFF',
            image: <Image source={require('../assets/Splash-screen.png')} />,
            title: 'Onboarding 1',
            subtitle: 'Done with React Native Onboarding Swiper',
            
          },
          {
            backgroundColor: '#C6FDFF',
            image: <Image source={require('../assets/Splash-screen.png')} />,
            title: 'Onboarding 2',
            subtitle: 'Done with React Native Onboarding Swiper',
            
          }
         ]}
      />
    );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});