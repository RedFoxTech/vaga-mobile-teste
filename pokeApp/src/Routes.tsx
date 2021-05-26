import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AllPokemons from './pages/AllPokemons/AllPokemons';
import SearchPokemon from './pages/SearchPokemon/SearchPokemon';
import CustomDrawerContent from './components/CustomDrawerContent /CustomDrawerContent ';

const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={ props => <CustomDrawerContent {...props} />} initialRouteName="AllPokemons">
      <Drawer.Screen name="AllPokemons" component={AllPokemons} />
        <Drawer.Screen name="SearchPokemon" component={SearchPokemon} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}