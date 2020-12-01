import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';

import {Header} from 'react-native-elements';

export default class Registro extends Component {
  render() {
    return (
        <View style={styles.container}>
         <View style={styles.containerHeader}>
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#09357A' }}
                centerComponent={{ text: 'REGISTRO', style: { color: '#09357A' } }}
                rightComponent={{ icon: 'home', color: '#09357A' }}/>
            </View>
            <View style={styles.containerEmail}>
            <TextInput placeholder="Email" placeholderTextColor="gray"
              style={styles.textInput}/> 
            </View>

            <View style={styles.containerPassword}>
            <TextInput placeholder="Contraseña" placeholderTextColor="gray"
              style={styles.textInput}/> 
            </View>

            <View style={styles.containerPasswordConfirm}>
            <TextInput placeholder="Confirmar contraseña" placeholderTextColor="gray"
              style={styles.textInput}/> 
            </View>

            <View style={styles.containerEdad}>
            <TextInput placeholder="Edad" placeholderTextColor="gray"
              style={styles.textInput}/> 
            </View>

            <View style={styles.containerButton}>
            <Button
            title="Registrarse"/>
            </View>

            <View style={styles.containerButtonAtras}>
            <Button
            title="Volver"/>
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
  containerEmail: {
    height: 50,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    marginLeft: 30,
    marginRight: 30,
    top: 160,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  containerPassword: {
    height: 50,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    marginLeft: 30,
    marginRight: 100,
    top: 230,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  containerPasswordConfirm: {
    height: 50,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    marginLeft: 30,
    marginRight: 100,
    top: 300,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  containerEdad: {
    height: 50,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    marginLeft: 30,
    marginRight: 300,
    top: 400,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  containerButton: {
    height: 20,
    marginLeft: 6,
    marginRight: 6,
    position: 'absolute',
    top: 500,
    paddingLeft: 20,
  },
  containerButtonAtras: {
    height: 20,
    marginLeft: 6,
    marginRight: 6,
    position: 'absolute',
    top: 550,
    paddingLeft: 20,
  },
  icon:{
    flex:1
  },
})