import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';

import {Input} from 'react-native-elements';
import HeaderApp from '../components/HeaderApp';

export default class Apostar extends Component {
    render() {
      return (
        <>
          <View style={styles.container}>         
       

            
              <View style={styles.containerButtonAtras}>
              <Button
              title="Volver"/>
              </View>
          </View>  
        </>  
      );
    };
  };
  
  const styles = StyleSheet.create({
    container:{
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'stretch',
    backgroundColor: '#09357A',
  },
  containerButtonAtras: {
    height: 20,
    marginLeft: 6,
    marginRight: 6,
    position: 'absolute',
    top: 620,
    paddingLeft: 20,
  },
  })    