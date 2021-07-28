import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, Button } from "react-native";
import { baseUrl } from '../shared/baseUrl';

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        width: '100%',
        height: 780,
        backgroundColor: "#eaeaea",
        justifyContent: "center",
        alignItems: "center",
        
    },
    text: {
        color: "white",
        fontSize: 38,
        lineHeight: 50,
        fontWeight: "bold",
        textAlign: "left",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        paddingTop: 350
    },
    subHeadingText: {
        color: "rgb(254, 189, 107)",
        fontSize: 22,
        lineHeight: 30,
        fontWeight: "normal",
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    },
    aboutText: {
        color: "white",
        fontSize: 20,
        lineHeight: 30,
        fontWeight: "normal",
        textAlign: "left",
        paddingLeft: 30,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 15,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 4
    },
    boxContainer:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        height:200,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonStyle:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        paddingTop: 20,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});


class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View style={styles.boxContainer}>
                <ImageBackground
                    style={styles.bgImage}
                    resizeMode='cover'
                    source={{uri: baseUrl + 'images/bg.jpg'}}
                >
                <Text style={styles.text}>Hello, I am Prakash!</Text>
                <Text style={styles.subHeadingText}>a web developer</Text>
                <Text style={styles.aboutText}>I am a front-end developer based in Dallas, Texas. I’m passionate about learning the latest and greatest technologies whether that’s the front-end or back-end. I enjoy creating sleek, responsive and user friendly webpages. I am currently open to opportunities and if you feel like we would be a great match, I’d love to hear from you!</Text>
                <View style={{ flexDirection:"row" }}>
                    <View style={styles.buttonStyle}>
                        <Button
                            color="#132659"
                            title="Projects"
                            >
                        </Button>
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button   
                            color="#132659"
                            title="Get In Touch">
                        </Button>
                    </View>
                </View>
                </ImageBackground>
            </View>
        );
    }
}

export default Home;
