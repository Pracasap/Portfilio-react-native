import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';


const styles = StyleSheet.create({
    bgImage: {
        width: '100%',
        height: 780,
        backgroundColor: "#eaeaea",
        
    },
    text: {
        color: "white",
        fontSize: 30,
        lineHeight: 50,
        fontWeight: "bold",
        textAlign: "left",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        paddingLeft: 15,
        marginTop: 50,
        marginBottom: 10
    },
    aboutText: {
        color: "white",
        fontSize: 17,
        lineHeight: 25,
        fontWeight: "normal",
        textAlign: "left",
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 5,    
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 4
    },
})

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        return (
            <View style={styles.boxContainer}>
                <ImageBackground
                    style={styles.bgImage}
                    resizeMode='cover'
                    source={require('./images/bg.jpg')}
                >
                    <Text style={styles.text}>Get In Touch</Text>
                    <Text style={styles.aboutText}>Prakash Sapkota</Text>
                    <Text style={styles.aboutText}>Dallas, TX 75287</Text>
                    <Text style={styles.aboutText}>U.S.A.</Text>
                    <Text style={styles.aboutText}>Phone: 1-206-555-1234</Text>
                    <Text style={styles.aboutText}>Email: Optimistic.prakash@gmail.com</Text>
                </ImageBackground>
                
                
            </View>
        );
    }
}

export default Contact;