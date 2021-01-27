import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {Input, Button, Card} from 'react-native-elements';

export class ElTotal extends Component {

    constructor (props) { 
        super(props);
        /*state = {
            data:[
             {name: "Cereals amb xocolata"},
              {description: "Cereals farcits de xocolata"},
              {quantity: 2},
              {category: "Cereals"},
              {price: 5},
            ]
          } */
        this.state = {
            price: 5,
            resultado: 0,
            lista: 0
        }  
    }
    
    calculaTotal = () => {
        //Calcular total de la lista
        
    }

    render() {
        return(
            <View >
              <View style={styles.sectionTitle} >
              <Button title='Calcular total' type="solid" onPress= {this.calculaTotal} /> 
              <Text>Total: </Text> 
              </View>               
            </View>

        );
    }
}

const styles = StyleSheet.create({
   
    colorSecundari2: {
        color: 'black',
        textAlign: 'left',
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: '#ff9906',
      },
    
  });