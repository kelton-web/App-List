import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

const FloatingButton = ({toggleForm, isFormOpened }) => {
    return (
        <TouchableOpacity onPress={toggleForm} style={styles.container}>
            {!isFormOpened ? (<Text style={styles.title}>+</Text>) : (<Text style={styles.title}>x</Text>)}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'green',
        justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        color: 'white',
        textAlign: "center",
        fontSize: 30
    }
})

export default FloatingButton;