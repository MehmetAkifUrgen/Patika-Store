import React from 'react';
import {
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Card from './components/Card';
import item_data from './json/data.json';
const App = () => {
  const renderItem = ({item}) => {
    console.log(item);
    return <Card sepet={item} />;
  };

  return (
    <SafeAreaView styles={styles.container}>
      <Text style={styles.headText}>PATIKASTORE</Text>
      <TextInput style={styles.textInput} placeholder="Ara..." />

      <FlatList
        keyExtractor={item => item.id.toString()}
        data={item_data}
        renderItem={renderItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headText: {
    color: '#800080',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textInput: {
    borderRadius: 5,
    paddingLeft: 15,
    backgroundColor: '#eceff1',
    margin: 10,
    fontSize: 18,
  },
});

export default App;
