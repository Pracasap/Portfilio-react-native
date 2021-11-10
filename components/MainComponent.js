import React, { Component } from 'react';
import Home from './HomeComponent';
import Projects from './ProjectComponent';
import ProjectInfo from './ProjectInfoComponent';
import Contact from './ContactComponent';
import Constants from 'expo-constants';
import { View, Platform, StyleSheet, Text, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchProjects } from '../redux/ActionCreators';

const mapDispatchToProps = {
    fetchProjects
};

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    }, 
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'rgb(28, 31, 45)'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='ionicon'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
)

const ProjectsNavigator = createStackNavigator(
    {
        Projects: { screen: Projects,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='documents'
                    type='ionicon'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        },
        ProjectInfo: { screen: ProjectInfo }
    }, 
    {
        initialRouteName: 'Projects',
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
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: 'rgb(28, 31, 45)'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='call'
                type='ionicon'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
)

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Icon
                        name='leaf'
                        type='ionicon'
                        iconStyle={styles.logoIcon}
                    ></Icon>
                </View>
                <View style={{flex: 3}}>
                    <Text style={styles.drawerHeaderText}>Prakash.com</Text>
                </View>
            </View>
                <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { 
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='ionicon'
                        size={20}
                        color={tintColor}
                    />
                )
            }
        },
        Projects: {
            screen: ProjectsNavigator,
            navigationOptions: {
                drawerLabel: 'My Projects',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='documents'
                        type='ionicon'
                        size={20}
                        color={tintColor}
                    />
                )
            } 
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Me',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='call'
                        type='ionicon'
                        size={20}
                        color={tintColor}
                    />
                )
            }
        }

    },
    {
        drawerBackgroundColor: 'rgb(209, 220, 255)',
        contentComponent: CustomDrawerContentComponent
        
    }
)

const AppNavigator = createAppContainer(MainNavigator);



class Main extends Component {
    
    componentDidMount() {
        this.props.fetchProjects();
    }

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

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: 'rgb(28, 31, 45)',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    stackIcon: {
        marginLeft: 22,
        color: '#fff',
        fontSize: 22
    },
    logoIcon: {
        marginLeft: 15,
        color: '#fff',
        fontSize: 22,
        fontSize: 30
    }
});

export default connect(null, mapDispatchToProps)(Main);