import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOption={{headerShown: false}}>
        <AppStack.Screen name="PokemonList" component={PokemonList} />
        <AppStack.Screen name="PokemonDetail" component={PokemonDetail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
