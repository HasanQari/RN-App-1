import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import ListItem from './components/ListItem';
import ListInput from './components/ListInput';

export default function App() {

  const [shoppingList, setShoppingList] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  const addItemHandler = itemValue => {
    setShoppingList(SList => [
      ...SList,
      { key: parseInt(Math.random() * 100).toString(), value: itemValue }
    ]);
    setIsAddModal(false);
  };

  const removeItemHandler = itemID => {
    setShoppingList(SList => {
      return SList.filter((item) => item.key !== itemID);
    });
  }

  const cancelItamAdditionHandler = () => {
    setIsAddModal(false);
  }

  return (
    <View style={styles.rootView}>
      <Text style={styles.headerTitle}>Shopping List</Text>
      <Button title="Add New Item to List" onPress={() => setIsAddModal(true)} />
      <ListInput onAddItem={addItemHandler} onVisible={isAddModal} cancelAddItem={cancelItamAdditionHandler} />
      <FlatList data={shoppingList}
        renderItem={itemData =>
          <ListItem value={itemData.item.value} id={itemData.item.key} onDelete={removeItemHandler} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootView: {
    padding: 50
  },

  headerTitle: {
    fontSize: 18,
    // textAlign: 'center',
    marginBottom: 10
  },

});
