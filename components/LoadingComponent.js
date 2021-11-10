import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function Loading() {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='#fff' />
            <Text style={styles.loadingText}>Loading . . .</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        loadingView: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        loadingText: {
            color: '#fff',
            fontSize: 15,
            fontWeight: 'bold',
            textShadowColor: 'rgba(0, 0, 0, 1)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
        }
    }
)

export default Loading;