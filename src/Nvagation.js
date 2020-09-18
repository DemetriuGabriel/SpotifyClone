import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons'

import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import LibraryScreen from './Screens/LibraryScreen';
import ProfileScreen from './Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        backgroundColor: '#282828',
                        borderTopColor: 'rgba(255, 255, 255, 0.3)'
                    },
                    activeTintColor: '#fff',

                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{
                        title: 'Inicio',
                        tabBarIcon: ({ size, color }) => 
                            <Entypo name="home" size={size} color={color} />
                        
                    }}
                />
                <Tab.Screen 
                    name="Search" 
                    component={SearchScreen}
                    options={{
                        title: 'Buscar',
                        tabBarIcon: ({ size, color }) => 
                            <AntDesign name="search1" size={size} color={color} />
                    }}
                />
                <Tab.Screen 
                    name="Library" 
                    component={LibraryScreen}
                    options={{
                        title: 'Sua Biblioteca',
                        tabBarIcon: ({ size, color}) => 
                            <FontAwesome5 name="book-open" size={size} color={color} />
                    }}
                />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen}
                    options={{
                        title: 'Perfil',
                        tabBarIcon: ({ size, color }) => 
                            <Ionicons name="md-person" size={size} color={color} />
                    }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}