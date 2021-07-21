import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';


class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <Text>
                Home Component
            </Text>
        );
    }
}

export default Home;