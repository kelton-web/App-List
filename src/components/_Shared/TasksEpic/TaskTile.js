import React from 'react'
import {Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const TaskTile = ({id, title, completed, onChangeStatus, onDeleteTask }) => {
    return (
    
        <TouchableOpacity onPress={() => onChangeStatus(id)}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Image style={styles.icon}
                    source={completed ? require('../../../../assets/icon_check.png') : require('../../../../assets/icon_circle.png') } />
                    <Text style={[styles.title, {color: completed ? "lightgrey" : "black"}]}>{title} !!</Text>
                </View>
                <TouchableOpacity onPress={() => onDeleteTask(id)}>
                    <Image style={styles.icon}
                    source={require('../../../../assets/icon_delete.png')} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
     container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    icon: {
        width: 30,
        height: 30
    },
    subContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        marginLeft: 25
    }
   
})

export default TaskTile;