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


export default class Login extends Component {
  render() {
    return (      
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Header
            placement="left"
            leftComponent={{icon: 'menu', color: '#09357A'}}
            centerComponent={{text: 'LOGIN', style: {color: '#09357A'}}}
            rightComponent={{icon: 'home', color: '#09357A'}}
          />          
        </View>

        <View style={styles.containerUserName}>
        <Icon
            type="font-awesome"
            name="user"
            color="gray"
            containerStyle={styles.icon}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor="gray"
            style={styles.textInput}
          />
          </View>
          <View style={styles.containerPassword}>
          <Icon
            type="entypo"
            name="key"
            color="gray"
            containerStyle={styles.icon}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            style={styles.textInput}
          />
        </View>
        <View style={styles.containerSignIn}>
          <Button title="Entrar" backgroundColor="#ffa100" />
          </View>     

        <View style={styles.containerRegister}>
          <Button title="Registrarse" backgroundColor="#ffa100" />
        </View> 
      </View>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#09357A',
  },
  containerSignIn: {
    marginLeft: 6,
    marginRight: 6,
    paddingTop: 6,
  },
  containerUserName: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginLeft: 10,
    marginRight: 10,
  },
  containerPassword: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginLeft: 10,
    marginRight: 10,
  },
  containerRegister: {

    marginLeft: 6,
    marginRight: 6,
    paddingTop: 6,
  },
  containerHeader: {

    top: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
  icon: {
    flex: 1,
  },
  textInput: {
    backgroundColor: 'transparent',
    flex: 5,
    color: 'black',
    paddingLeft: 25,
  },
});
