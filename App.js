import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Hello world!</Text>
        </View>
        <View style={styles.body}>
          <Text>Hello world!</Text>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header: {
      alignItems: 'center', 
      justifyContent: 'center', 
      flex: 1, 
      backgroundColor: 'darkred'
    },
    body: {
      alignItems: 'center', 
      justifyContent: 'center', 
      flex: 5, 
      backgroundColor: 'blue'
    }
})