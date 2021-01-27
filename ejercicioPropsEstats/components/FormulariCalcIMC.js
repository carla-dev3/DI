import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Input, Button} from 'react-native-elements';

export class FormulariCalcIMC extends Component {

    constructor (props) { 
        super(props);
        this.state = {
            pes: 0.0,
            alcada: 0.0,
            missatge: '',
        }
    }
    guardaPes = (elPes) => {
        this.setState({pes: elPes}) //Guardamos el valor 'elPes' dentro del estado pes
        console.log(elPes);
    }

    guardaAlcada = (unaAlcada) => {
        this.setState({alcada: unaAlcada})
        console.log(unaAlcada);
    }

    calculaIMC = () => {
        //1r comprove que s´hagen omplert les dades.
        if(this.state.alcada > 0 && this.state.alcada > 0) {
            //2n realitze la formula 
            let calcul = this.state.pes/Math.pow(this.state.alcada, 2);
            let resultat = ""
            //3r averigüe el missatge que he de mostrar
            if (calcul < 18.5) {
                resultat = "Pes insuficient";
            }else if(calcul >= 18.5 && calcul < 25.0) {
                resultat = "Pes normal"
            } else if (calcul >= 25.0 && calcul < 27.0) {
                resultat = "Sobrepes grau I"
            }
            this.setState({missatge: resultat})
        } else {
            this.setState({missatge: ''})
        }
    }

    render() {
        return(
            <View>
                <View style={styles.sectionTitle}>
                    <Text style={[{fontSize:32},styles.colorSecundari2]}>Dades</Text>
                </View>
                <View>
                    <Input label='PES' labelStyle={{color: 'blue'}} 
                            placeholder='Introduix el pes'
                            errorMessage={this.state.pes <= 0.0? "El pes ha de ser major que 0": ''} //Mensaje de error
                            keyboardType='decimal-pad' //Teclado numérico
                            onChangeText={this.guardaPes}>
                    </Input>
                    <Input label='ALÇADA' labelStyle={{color: 'blue'}} 
                            placeholder='Introduix la alçada'
                            errorMessage={this.state.alcada <= 0? "Lálçada ha de ser major que 0": ''}
                            keyboardType='decimal-pad'
                            onChangeText={this.guardaAlcada}>
                    </Input>
                </View>
                <Button title='Calcular IMC' type="outline" raised={true} onPress={this.calculaIMC} />
                <View>
                    <Text>Resultat</Text>
                    <Text> {this.state.missatge} </Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    colorSecundari2: {
      color: '#ff1744',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
        padding: 5,
        margin: 5,
      },
 
  });