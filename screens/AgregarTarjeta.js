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

            <View style={styles.login}>
            <Text style={[styles.login, {fontSize: 32, letterSpacing: 8, fontFamily: 'arial' }]}>Email</Text>
            </View>
            <View style={{paddingLeft: 20}}>
            <Input
              placeholder='Email'
              leftIcon={{ type: 'font-awesome', name: 'user', color: 'grey'}}
            />
            </View>

            <View>
            <Text style={{paddingTop: 15, color: 'white', fontWeight: 'bold', paddingLeft: 30, fontSize: 15, letterSpacing: 8 }}></Text>
            </View>

            <View style={{paddingLeft: 20}}>
            <Input
            placeholder='contraseña'
            leftIcon={{type: 'font-awesome', name: 'lock', color: 'grey'}}
            secureTextEntry={true}
            style={{paddingBottom: 0, height: 1}}
            />
            <Text style={{textDecorationLine: 'underline', alignSelf: 'flex-end', color: '#fff',}}>Cambiar contraseña</Text>
            </View>

            <View style {{alignSelf: 'flex-start', marginLeft: 140}}>
            <Button
              buttonStyle={{backgroundColor: '#169BD5'}}
              title='Apuestas'
            />
            </View>

            <View style={{alignSelf: 'flex-end', marginLeft: 120}}>
            <Button
              buttonStyle={{backgroundColor: '#169BD5'}}
              title='Ingresar tarjeta'
            />
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