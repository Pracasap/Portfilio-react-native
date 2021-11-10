import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet, Image, Linking, Pressable } from 'react-native';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Icon } from 'react-native-elements';

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

const styles = StyleSheet.create({
    bgImage: {
        width: '100%',
        height: '100%',
        backgroundColor: "#eaeaea",
    },
    headerText: {
        color: "white",
        fontSize: 25,
        lineHeight: 40,
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        margin: 15
    },
    smallText: {
        fontSize: 15,
        margin : 10,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'left'
    },
    icon: {
        fontSize: 45,
        padding: 15,
        color: '#280096'
    },
    iconsContainer: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    boxContainer:{
        backgroundColor: '#fff',
        margin: 0,
        marginBottom: 25,
        alignItems: 'center'
    },
})

function RenderIcons({project}) {
    let weblinks = [];
    if (project.website) {
        const websiteLink = <Icon
        name='earth'
        type='ionicon'
        iconStyle={styles.icon}
        onPress={() => {
            Linking.openURL(project.website);
        }}
    />;
        weblinks.push(websiteLink);
        weblinks.push(" ");
    }
    if (project.github) {
        const githubLink = <Icon
        name='logo-github'
        type='ionicon'
        iconStyle={styles.icon}
        onPress={() => {
            Linking.openURL(project.github);
        }}
    />;
        weblinks.push(githubLink);
        weblinks.push(" ");
    }
    if (project.codepen) {
        const codepenLink = <Icon
        name='logo-codepen'
        type='ionicon'
        iconStyle={styles.icon}
        onPress={() => {
            Linking.openURL(project.codepen);
        }}
    />;
        weblinks.push(codepenLink);
        weblinks.push(" ");
    }
    return weblinks;
}

function RenderProject({project}) {
    if (project) {
        return (
            <ImageBackground
                style={styles.bgImage}
                resizeMode='cover'
                source={{uri: baseUrl + 'images/bg.jpg'}}
            >
                <Text style={styles.headerText}>{project.name}</Text>
                <View style={styles.boxContainer}>
                    <Image
                            transition
                            resizeMode="cover"
                            source={{uri: baseUrl + project.image}}
                            style={{ width: '100%', height: 280 }}
                        />
                    <Text style={styles.smallText}>
                            {project.description}
                    </Text>
                    <Text style={styles.iconsContainer}>
                        <RenderIcons project={project} />
                    </Text>
                </View>
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