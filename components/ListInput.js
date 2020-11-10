import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const ListInput = props => {
    const [enteredItem, setEnteredItem] = useState('');

    const ItemInputHandler = (enteredText) => {
        setEnteredItem(enteredText);
    }

    const AddItemHandler = () => {
        props.onAddItem(enteredItem);
        setEnteredItem('');

    }

    return (
        <Modal visible={props.onVisible} animationType="slide">
            <View style={styles.formView}>
                <TextInput
                    style={styles.inputField}
                    placeholder="Write Shopping Items Here !"
                    onChangeText={ItemInputHandler}
                    value={enteredItem} />
                <View style={styles.btnInRow}>
                    <View style={styles.Button}><Button title="Add" onPress={AddItemHandler} color='green' /></View>
                    <View style={styles.Button}><Button title="Cancel" onPress={props.cancelAddItem} color='red' /></View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    formView: {
        // flexDirection: 'row',
        flex: 1,
        // justifyContent: 'space-between',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        width: '70%',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 10
    },
    btnInRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    Button:{
        width:'40%'
    }

});

export default ListInput;