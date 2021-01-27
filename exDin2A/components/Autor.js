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

export class Autor extends Component {

    constructor (props) { 
        super(props);
    
        this.state = {
            color: 'red',
            name: 'Carla',
        }  
    }  

    render() {

        function Autor(props) {
            return this.props(this.state.nom);
          }

        return(
            <View >
            <Text>{this.state.name}</Text>
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