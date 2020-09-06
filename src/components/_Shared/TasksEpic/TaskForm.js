import React, { useState } from 'react'
import {View, TextInput, StyleSheet, Button } from 'react-native'

const TaskForm = ({onAddTask}) => {
    const [title, setTitle] = useState('')
    const _onchangeText = (value) => {
        setTitle(value)
    };

    const _onPressBtn = () => {
        if(title.length > 0){
            onAddTask(title);
            setTitle("");
        }
        
    };
    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
            <TextInput value={title} onChangeText={_onchangeText} />
            </View>
            <Button
            onPress={_onPressBtn}
            title="Ajouter"
            color="#841584"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
        
    },
    containerInput: {
        width: '70%',
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 4,
        paddingLeft: 7,
        marginBottom: 5,
        marginTop: 5
    },
    
})

export default TaskForm;