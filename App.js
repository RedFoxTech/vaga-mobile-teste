import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Screens/Home';
import Pokemons from './src/Components/Pokemons';
import Details from './src/Components/Details';


const navigator = createStackNavigator(
  {
    Home: Home,
    Pokemons: Pokemons,
    Details: Details
  }, 
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Pokedex'
    } 
  }
);

export default createAppContainer(navigator);