import React from 'react';
import { View } from 'react-native';
import AllPokemons from './src/pages/AllPokemons/AllPokemons';
import SearchPokemon from './src/pages/SearchPokemon/SearchPokemon';


const App = () => {
  

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <SearchPokemon />
    </View>
  );
};

export default App;
