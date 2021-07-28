import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

const styles = StyleSheet.create({
    bgImage: {
        width: '100%',
        height: 780,
        backgroundColor: "#eaeaea",
        
    },
    headerText: {
        color: "white",
        fontSize: 25,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        marginTop: 15
    },
    smallText: {
        fontSize: 18,
        margin: 10
    },
})

function RenderProject({project}) {
    if (project) {
        
        return (
            <ImageBackground
                style={styles.bgImage}
                resizeMode='cover'
                source={{uri: baseUrl + 'images/bg.jpg'}}
            >
                <Text style={styles.headerText}>{project.name}</Text>
                <Card>
                    <Image
                            transition
                            resizeMode="cover"
                            source={{uri: baseUrl + project.image}}
                            style={{ width: '100%', height: 250, borderRadius: 1 }}
                        />
                    <Text style={styles.smallText}>
                            {project.description}
                        </Text>
                        <Text style={styles.smallText}>
                        Website: {project.website}
                        </Text>
                        <Text style={styles.smallText}>
                        Github: {project.github}
                        </Text>
                        <Text style={styles.smallText}>
                        Codepen: {project.codepen}
                        </Text>
                </Card>
            </ImageBackground>
        );
    }
    return <View />;
}

class ProjectInfo extends Component {

    static navigationOptions = {
        title: 'Project Information'
    }

    render() {
        const projectId = this.props.navigation.getParam('projectId');
        const project = this.props.projects.projects.filter(project => project.id === projectId)[0]
        return <RenderProject project={project} />;
    }
}

export default connect(mapStateToProps)(ProjectInfo);