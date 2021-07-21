import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, Button } from "react-native";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        width: '100%',
        height: 603,
        backgroundColor: "#eaeaea",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    text: {
        color: "white",
        fontSize: 38,
        lineHeight: 60,
        fontWeight: "bold",
        textAlign: "left",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
    subHeadingText: {
        color: "rgb(254, 189, 107)",
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    },
    aboutText: {
        color: "white",
        fontSize: 17,
        lineHeight: 25,
        fontWeight: "normal",
        textAlign: "left",
        padding: 20,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        top: 150,
        left: 15,
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
        justifyContent: 'center'
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
                    source={require('./images/bg.jpg')}
                >
                <Text style={styles.text}>Hello, I am Prakash!</Text>
                <Text style={styles.subHeadingText}>I CREATE BEAUTIFUL WEBSITES!</Text>
                <Text style={styles.aboutText}>I am a front-end developer based in Dallas, Texas. I’m passionate about learning the latest and greatest technologies whether that’s the front-end or back-end. I enjoy creating sleek, responsive and user friendly webpages. I am currently open to opportunities and if you feel like we would be a great match, I’d love to hear from you!</Text>
                </ImageBackground>
            </View>
        );
    }
}

export default Home;
