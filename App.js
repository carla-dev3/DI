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
  Colors,
} from 'react-native';

import {Input, Button} from 'react-native-elements';

class App extends Component {
  render() {
  return (
    <>
      <View style={styles.contenedor}>
      <View style={styles.seccion1}>
        <Text>Seccion 1</Text>
      </View>
      <View style={styles.seccio2}>
        <Text>Seccion 2</Text>
      </View>
      <View style={styles.seccio3}>
        <Text>Seccion 3</Text>
      </View>
      </View>
    </>
  );
  }
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'column',
    borderColor: 'green',
    borderWidth: 5,
  },
  seccion1: {
    flex:1,
    borderColor:'red',
    borderWidth:3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'right',
  },
  seccio2: {
    flex:1,
    borderColor:'green',
    borderWidth:3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'center',
    },
    seccio3: {
      flex:1,
      borderColor:'blue',
      borderWidth:3,
      fontSize: 12,
      fontWeight: '600',
      margin: 4,
      padding: 12,
      textAlign: 'left',
      },      
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
