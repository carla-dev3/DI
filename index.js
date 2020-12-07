/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Registro from './screens/Registro';
import {name as appName} from './app.json'; 
import Apostar from './screens/Apostar';
import AgregarTarjeta from './screens/AgregarTarjeta';

AppRegistry.registerComponent(appName, () => AgregarTarjeta);

