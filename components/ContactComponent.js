import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';


const styles = StyleSheet.create({
    bgImage: {
        width: '100%',
        height: 604,
        backgroundColor: "#eaeaea",
        
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
        paddingLeft: 15,
        marginTop: 50
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
                <Card wrapperStyle={{padding: 10}}>
                    <Text>Prakash Sapkota</Text>
                    <Text>Dallas, TX 75287</Text>
                    <Text style={{marginBottom: 10}}>U.S.A.</Text>
                    <Text>Phone: 1-206-555-1234</Text>
                    <Text>Email: Optimistic.prakash@gmail.com</Text>
                </Card>
                </ImageBackground>
                
                
            </View>
        );
    }
}

export default Contact;