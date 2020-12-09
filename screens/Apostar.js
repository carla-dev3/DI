import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
} from 'react-native';

//import {RadioButton} from 'react-native-paper';
import {Input} from 'react-native-elements';
import HeaderApp from '../components/HeaderApp';

export default class Apostar extends Component {
    render() {
      return (
        <>
          <View style={styles.container}>   
          <HeaderApp></HeaderApp>  

       <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
         <View style={{ flexDirection: 'row'}}>
         <Text style={{ alignSelf: 'center', fontFamily: 'Arial', fontSize: 18 }}>Over</Text>
        <View style={{styles.circulo, {marginLeft: 25}}}>
          <RadioButton value='first'/>
          <Text style={styles.text}>1.5</Text>
        </View>
        <View style={{styles.circulo, {marginLeft: 10}}}>
          <RadioButton value='second'/>
          <Text style={styles.text}>2.5</Text>
        </View>
        <View style={{styles.circulo, {marginLeft: 10}}}>
          <RadioButton value='third'/>
          <Text style={styles.text}>3.5</Text>
        </View>
         </View>
       </RadioButton.Group>

            
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
    circulo: {
      backgroundColor: '#AAAAAA',
      width: 100,
      padding: 5,
      borderRadius: 30,
      flexDirection: 'row'
    },
    text: {
      marginTop: 0,
      fontFamily: 'Arial',
    },
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