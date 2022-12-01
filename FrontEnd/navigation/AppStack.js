import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

const AppStack = () => {
    return (
        <Tab.Navigator
            tableBarOptions={{
                activeTintColor: '#2e64e5'
            }}>
            <Tab.Screen
                name='Home'
                component={FeedStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name='home-outline'
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <IonIcons name='person-outline' color={color} size={size} />
                    ),
                }}
        // <Stack.Navigator>
        //     <Stack.Screen name='Home' component={HomeScreen} />
        // </Stack.Navigator>
    );
}

export default AppStack;