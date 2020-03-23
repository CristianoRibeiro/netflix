import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

import './config/ReactotronConfig';

function App() {
  return (
    <NavigationContainer>
      <>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Routes />
      </>
    </NavigationContainer>
  );
}

export default App;
