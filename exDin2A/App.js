/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Input, Button} from 'react-native-elements';

import {ElMeuItem} from './components/ElMeuItem'; 
import {ElTotal} from './components/ElTotal';

export class App extends Component {
  render() {
    return(
      <View style={styles.colorPrimari}>
  
    <ElMeuItem />
    <ElTotal />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  colorPrimari: {
    backgroundColor: 'green',
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    padding: 5,
  },
  
});

export default App;
