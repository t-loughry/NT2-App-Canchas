import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default () => {

    return (

        <View style={styles.container}>
            <StatusBar style={'auto'} />

            <View>
                <Text> LAS CANCHAS DE UN ANIMAL </Text>
            </View>

        </View>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});