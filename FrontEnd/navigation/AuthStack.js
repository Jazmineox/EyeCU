import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
return (
    <Stack.Navigator>
        <Stack.Screen
            name='Onboarding'
            component={OnboardingScreen}
            options={{header: () => null}}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{header: () => null}}
        />
        <Stack.Screen 
            name='Signup' 
            component={SignupScreen} 
            options={({navigation}) => ({
                title:'',
                headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: "#f9fafd",
                    elevation: 0,
                },
                headerLeft: () => (
                    <View style={{marginLeft: 10}}>
                        <FontAwesome.Button
                            name='long-arrow-left'
                            size={25}
                            backgroundColor='#f9fafd'
                            color='#333'
                            onPress={() => navigation.navigate("Login")}
                        />
                    </View>
                ),
            })} 
        />
    </Stack.Navigator>
        
  );
};

export default AuthStack;
