import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';

import {Header, Input} from 'react-native-elements';

export default class Apostar extends Component {
    render() {
      return (
          <View style={styles.container}>
           <View style={styles.containerHeader}>
              <Header
                  placement="left"
                  leftComponent={{ icon: 'menu', color: '#09357A' }}
                  centerComponent={{ text: 'REALIZAR APUESTA', style: { color: '#09357A' } }}
                  rightComponent={{ icon: 'home', color: '#09357A' }}/>
            
          

              <View style={styles.containerButtonAtras}>
              <Button
              title="Volver"/>
              </View>

            </View>
          </View>  
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
  containerHeader: {
    height: 60,
    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
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