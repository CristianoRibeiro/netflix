import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      headerBackTitleVisible={false}
      headerBackTitle={false}
      headerLayoutPreset="center"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Netflix', headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
}
