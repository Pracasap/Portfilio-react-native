import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Pressable} from 'react-native';
import { ListItem, Image } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        projects: state.projects
    };
}

const styles = StyleSheet.create({
    bgImage: {
        width: '100%',
        height: '100%',
        backgroundColor: "#eaeaea",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        
    },
    text: {
        color: "white",
        fontSize: 17,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        margin: 10
    },
})

class Projects extends Component {

    static navigationOptions = {
        title: 'Projects'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderProject = ({item}) => {
            return (
                <Pressable
                onPress={() => navigate('ProjectInfo', { projectId: item.id })}
                >
                    <View style={{marginBottom: 30, margin: 0}}>
                        <Image
                            transition
                            resizeMode="cover"
                            source={{uri: baseUrl + item.image}}
                            style={{ width: '100%', height: 280 }}
                        />
                        <ListItem
                            title={item.name}
                            subtitle={item.description}
                        />
                    </View>
                </Pressable>
            );
        };

        if (this.props.projects.isLoading) {
            return (
                <View>
                    <ImageBackground
                        style={styles.bgImage}
                        resizeMode='cover'
                        source={{uri: baseUrl + 'images/bg.jpg'}}
                    >
                    <Loading/>
                    </ImageBackground>
                </View>
            )
        }

        if (this.props.projects.errMess) {
            return (
                <View>
                    <ImageBackground
                        style={styles.bgImage}
                        resizeMode='cover'
                        source={{uri: baseUrl + 'images/bg.jpg'}}
                    >
                    <Text>{this.props.projects.errMess}</Text>
                    </ImageBackground>
                </View>
            )
        }
        return (
            <View>
                <ImageBackground
                    style={styles.bgImage}
                    resizeMode='cover'
                    source={{uri: baseUrl + 'images/bg.jpg'}}
                >
                <Text style={styles.text}>Projects that make my journey worthwhile</Text>
                
                <FlatList
                    data={this.props.projects.projects}
                    renderItem={renderProject}
                    keyExtractor={item => item.id.toString()}
                />
                
                </ImageBackground>
            </View>
        );
    }
}

export default connect(mapStateToProps)(Projects);