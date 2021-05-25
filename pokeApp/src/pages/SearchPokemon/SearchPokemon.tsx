import React from 'react';

import {
  Image,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import api from '../../services/api';

const SearchPokemon = () => {
  const [data, setData] = React.useState<any[]>([])
  const [pokemonName, setPokemonName] = React.useState('')

  let pokemon: any = [];
  async function loadData() {
      
    try {
      const response = await api.get(`/pokemon/${pokemonName.toLocaleLowerCase()}`)

      const pokemonAdapter = () => {
        return [{
          abilities: response.data.abilities[1].ability.name,
          name: response.data.name,
          img: response.data.sprites["front_default"],
          type: response.data.types[0].type.name,
          weight: response.data.weight,
          height: response.data.height 
        }]
      }                                                                                 

      pokemon = pokemonAdapter()

      setData(pokemon)
      
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    
    loadData();
  },[]);
  
  
  return (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center', backgroundColor:"#ff0000"}}>
       <TextInput
        placeholderTextColor="#000"
        style={{borderWidth: 1, width: '80%', borderRadius: 5, backgroundColor:"#FF2548"}}
        placeholder="Search here..."
        onChangeText={value => setPokemonName(value)}
        value={pokemonName}
       />
       <Button title="Search" onPress={() => loadData()} />
       {data.map(item => {
         return(
           <View>
              <Image source={{uri:item.img}} style={{ width: 180, height: 80 }} />
              <Text>Name: {item.name}</Text>
              <Text>Type: {item.type} </Text>
              <Text>Abilities: {item.abilities} </Text>
              <Text>Weight: {item.weight} </Text>
              <Text>Height: {item.height} </Text>
           </View>
         );
       })}
    </View>
  );
};

export default SearchPokemon;
