import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

import Main from './pages/Main';
import Detail from './pages/Detail';

import { Logo } from './styles';

const logo = require('./assets/images/netflix.png');

const Stack = createStackNavigator();

export default function Routes() {
  function LogoTitle() {
    return <Logo source={require('./assets/images/netflix.png')} />;
  }

  return (
    <Stack.Navigator
      headerBackTitleVisible={false}
      headerBackTitle={false}
      headerLayoutPreset="center"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
          // borderBottomColor: '#000',
        },
        headerTintColor: '#fff',
        borderBottomColor: '#000',
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerTitle: <LogoTitle />,
          // title: <Image source={{ uri: logo }} />,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerBackTitleVisible: false,
          headerTitle: false,
        }}
      />
    </Stack.Navigator>
  );
}
