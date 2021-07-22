import React, { Component } from 'react';
import Home from './HomeComponent';
import Projects from './ProjectComponent';
import Contact from './ContactComponent';
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    }, 
    {
            defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'rgb(28, 31, 45)'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff',
                fontFamily: 'sans-serif',
            }
        }
    }
)

const ProjectsNavigator = createStackNavigator(
    {
        Projects: { screen: Projects }
    }, 
    {
            defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'rgb(28, 31, 45)'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    }, 
    {
            defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'rgb(28, 31, 45)'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Projects: { screen: ProjectsNavigator },
        Contact: { screen: ContactNavigator }

    },
    {
        drawerBackgroundColor: 'rgb(209, 220, 255)'
    }
)

const AppNavigator = createAppContainer(MainNavigator);



class Main extends Component {
    
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}
            >
                <AppNavigator />
            </View>
        );
    }
}

export default Main;