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

export class ElMeuItem extends Component {

    constructor (props) { 
        super(props);
        state = {
            data:[
             {name: "Cereals amb xocolata"},
              {description: "Cereals farcits de xocolata"},
              {quantity: 2},
              {category: "Cereals"},
              {price: 5},
            ]
          }
       /* this.state = {
            name: 'Cereals amb xocolata',
            description: 'Cereals farcits de xocolata',
            quantity: 2,
            category: 'Cereals',
            price: 5,
        }  */
    }
    


    render() {
        return(
            <View >
            <View>
                    <Text style={[{fontSize:24},styles.colorSecundari2]}>Llistat:</Text>
            </View>  
            <View style={styles.sectionTitle}>                     
             <Text>{this.state.name}</Text>
             <Text>{this.state.description}</Text>
             <Text style= {{textAlign: 'right'}}> Preu: {this.state.price}</Text>           
              </View>  
              <FlatList
                data={this.state.data}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={item => item}
                />
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