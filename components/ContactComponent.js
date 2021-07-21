import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        return (
            <Text>
                Contact Component
            </Text>
        );
    }
}

export default Contact;