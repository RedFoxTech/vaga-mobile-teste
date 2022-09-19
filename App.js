
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NameSearch from './src/views/NameSearch';
import ChoiceSearch from './src/views/ChoiceSearch';
import Pokemon from './src/views/Pokemon'
import ChoicePokemon from './src/views/ChoicePokemon'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChoiceSearch" component={ChoiceSearch}/>
      <Stack.Screen name="NameSearch" component={NameSearch}/>
      <Stack.Screen name="Pokemon" component={Pokemon}/>
      <Stack.Screen name="ChoicePokemon" component={ChoicePokemon}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}



