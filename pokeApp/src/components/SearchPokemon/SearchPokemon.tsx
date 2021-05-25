import React from 'react';

import {
  Image,
  Text,
  View
} from 'react-native';
import api from '../../services/api';

const SearchPokemon = () => {
  const [data, setData] = React.useState<any[]>([])

  let pokemon: any = [];

  React.useEffect(() => {
    async function loadData() {
      
      try {
        const response = await api.get('/pokemon/pikachu')

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
        
        setData(pokemon);
        console.log(data[0])
      } catch (error) {
        console.log(error)
      }
    }
    loadData();
  },[]);
  
  
  return (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center', backgroundColor:"#FFF"}}>
       
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
