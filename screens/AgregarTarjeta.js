import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';

import {Input, Button, Header, Image, Icon} from 'react-native-elements';

export default class AgregarTarjeta extends Component {
  render() {
    return (
          <View style={styles.container}>
          <View style={styles.containerHeader}>
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#09357A' }}
                centerComponent={{ text: 'AGREGAR TARJETA', style: { color: '#09357A' } }}
                rightComponent={{ icon: 'home', color: '#09357A' }}/>
            </View>  

            <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
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
containerCreditCard: {
  paddingLeft: 110,
  top: 100,
  left: 0,
  right: 0,
  position: 'absolute',
},
containerNumTarjeta: {
  height: 50,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#ffffff',
    marginLeft: 30,
    marginRight: 100,
    top: 350,
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
    marginRight: 100,
    top: 420,
    left: 0,
    right: 0,
    position: 'absolute',
},
containerButton: {
  height: 20,
  marginLeft: 250,
  marginRight: 6,
  position: 'absolute',
  top: 620,
  paddingLeft: 20,
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