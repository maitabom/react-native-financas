/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
