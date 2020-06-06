import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'PokeAPI',
              headerStyle: {
                backgroundColor: '#1854AD'
              },
              headerTitleAlign: 'center',
              headerTintColor: '#FFF'
            }}
          />

          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{
              title: 'Sobre',
              headerStyle: {
                backgroundColor: '#1854AD'
              },
              headerTitleAlign: 'center',
              headerTintColor: '#FFF'
            }} />
        </Stack.Navigator>
      </NavigationContainer >
    );
  }
}
export default App;
