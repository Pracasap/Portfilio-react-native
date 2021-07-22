import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native';
import { ListItem, Card, Image } from 'react-native-elements';
import { PROJECTS } from '../shared/projects';

const styles = StyleSheet.create({
    bgImage: {
        width: '100%',
        height: 604,
        backgroundColor: "#eaeaea",
        
    },
    text: {
        color: "white",
        fontSize: 17,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        marginTop: 15
    },
})



class Projects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            projects: PROJECTS
        }
    }

    static navigationOptions = {
        title: 'Projects'
    }

    render() {
        
        const renderProject = ({item}) => {
            return (
                <Card>
                    <Image
                        transition
                        // source={`${item.image}`}
                        source={require('./images/fineDine.png')}
                        style={{ width: '100%', height: 240 }}
                    />
                    <ListItem
                        title={item.name}
                        subtitle={item.description}

                    />
                </Card>
            );
        };

        return (
            <View>
                <ImageBackground
                    style={styles.bgImage}
                    resizeMode='cover'
                    source={require('./images/bg.jpg')}
                >
                <Text style={styles.text}>Projects that make my journey worthwhile</Text>
                
                <FlatList
                    data={this.state.projects}
                    renderItem={renderProject}
                    keyExtractor={item => item.id.toString()}
                />
                
                </ImageBackground>
            </View>
        );
    }
}

export default Projects;