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
} from 'react-native';

import {Input, Button, Header} from 'react-native-elements';

const myBody = () => {

}

const miHeader = () => {
  return(
    <View>
  <Header
   placement="left"
   leftComponent={{ icon: 'menu', color: '#09357A' }}
   centerComponent={{ text: 'EVENTOS', style: { color: '#09357A' } }}
   rightComponent={{ icon: 'home', color: '#09357A' }}/>
 </View>
  )
 }


class App extends Component {
  render() {
  return (
    <>
    {miHeader()}
      <View style={styles.contenedor}>
      <View style={styles.seccion1}>
        <Text>Seccion 1</Text>
      </View>
      <View style={styles.seccion2}>
        <Text>Seccion 2</Text>
      </View>
      <View style={styles.seccion3}>
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
  seccion2: {
    flex:1,
    borderColor:'green',
    borderWidth:3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'center',
    },
    seccion3: {
      flex:1,
      borderColor:'blue',
      borderWidth:3,
      fontSize: 12,
      fontWeight: '600',
      margin: 4,
      padding: 12,
      textAlign: 'left',
      },      
  
});

export default App;
