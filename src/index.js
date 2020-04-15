import React from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import Routes from './routes';

import './config/ReactotronConfig';

function App() {
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Routes />
        </>
      </NavigationContainer>
    </AppearanceProvider>
  );
}

export default App;
