import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

import {Input, Button, Header, Image} from 'react-native-elements';

export default class Partidos extends Component {

    render() {
        return(
            <View>
            <View style={styles.fechaEvento}><Text>07-10-2020</Text></View>
            <View style={styles.equiposEvento}>
              <View style={styles.equipo}>
              <Image source={{ uri: 'https://i.imgur.com/JwTyXcw.png'}}
                style={{ width: 80, height: 80 }}
              />
              </View>
              <View style={styles.equipo}><Text>VS</Text></View>
              <View style={styles.equipo}>
              <Image source={{ uri: 'https://i.imgur.com/htAyytH.png'}}
                style={{ width: 80, height: 80 }}
              />
              </View>
            </View>
            <View style={styles.accionesEvento}>
              <Button title="+"></Button>
            </View>
            </View>
        )
    }
}