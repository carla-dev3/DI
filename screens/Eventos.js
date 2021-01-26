import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList
} from 'react-native';

import {Input, Button, Header, Image} from 'react-native-elements';
import {Partidos} from '../components';

const myBody = () => {
  return (
    <View style={styles.contenedor}>
    <View style={styles.contenedorEvento}>
      <View>
        <Partidos></Partidos>
      </View>
    <View style={styles.contenedorEvento}>
      <View style={styles.fechaEvento}><Text>10-10-2020</Text></View>
      <View style={styles.equiposEvento}>
      <View style={styles.equipo}>
      <Image source={{ uri: 'https://i.imgur.com/SXI9LEm.png'}}
        style={{ width: 80, height: 80 }}
      />
      </View>
        <View style={styles.equipo}><Text>VS</Text></View>
        <View style={styles.equipo}>
        <Image source={{ uri: 'https://i.imgur.com/0kjJAcO.png'}}
          style={{ width: 80, height: 80 }}
        />
        </View>
      </View>
      <View style={styles.accionesEvento}>
      <Button title="+"></Button>
      </View>
    </View>
    <View style={styles.contenedorEvento}>
      <View style={styles.fechaEvento}><Text>10-10-2020</Text></View>
      <View style={styles.equiposEvento}>
      <View style={styles.equipo}>
      <Image source={{ uri: 'https://i.imgur.com/T98bIVd.png'}}
        style={{ width: 80, height: 80 }}
      />
      </View>
        <View style={styles.equipo}><Text>VS</Text></View>
        <View style={styles.equipo}>
        <Image source={{ uri: 'https://i.imgur.com/bIUYbQ8.png'}}
          style={{ width: 80, height: 80 }}
        />
        </View>
      </View>
      <View style={styles.accionesEvento}>
      <Button title="+"></Button>
      </View>
    </View>
    <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
    </View>
    </View>
  )  
}

const miHeader = () => {
  return(
    <View>
  <Header
   placement="left"
   leftComponent={{ icon: 'menu', color: '#09357A' }}
   centerComponent={{ text: 'EVENTOS', style: { color: '#09357A' } }}
   rightComponent={{ icon: 'home', color: '#09357A' }}/>
 </View>
  )
 }


class App extends Component {
  render() {
  return (
    <>
    {miHeader()}
    {myBody()}
    </>
  );
  }
};

const styles = StyleSheet.create({
  
  equipo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  accionesEvento: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'green',
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    
  },
  equiposEvento: {
    flex: 3,
    flexDirection: 'row',
    
    borderWidth: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fechaEvento: {
    flex: 1,
    borderWidth: 1,
  },
  contenedorEvento: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'blue',
  },
  fecha: {
    justifyContent: 'center',
    display: 'flex',
    fontSize: 20, 
    paddingLeft: 125,
    color: 'white',
    flexDirection: 'row',
  },
  contenedor: {
    flex:1,
    flexDirection: 'column',
    display: 'flex',
    borderColor:'blue',
    borderWidth:3,
    fontSize: 12,
    fontWeight: '600',
    margin: 2,
    padding: 12,
    backgroundColor: '#09357A',
  },
  
});

// export default App;
