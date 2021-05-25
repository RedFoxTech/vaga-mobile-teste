import React from 'react';

import {
  Image,
  View,
} from 'react-native';
import api from '../../services/api';

import { Container, Header, CenterView, SearchBtn, Input, TextProps, CenterProps } from './SearchPokemon.styles'

const SearchPokemon = () => {
  const [data, setData] = React.useState<any[]>([])
  const [pokemonName, setPokemonName] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  let pokemon: any = [];
  async function loadData() {

    try {
      const response = await api.get(`/pokemon/${pokemonName.toLocaleLowerCase()}`)

      const pokemonAdapter = () => {
        return [{
          id: response.data.id,
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
      setLoading(true)

    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {

    loadData();
  }, []);


  return (
    <Container>
      <Header>
        <Input
          placeholderTextColor="#000"
          placeholder="Search here..."
          onChangeText={(value: string) => setPokemonName(value)}
          value={pokemonName}
        />
        <SearchBtn onPress={() => loadData()}>
          <View style={{alignItems:'center', borderWidth: 0.5, padding: 4, borderTopRightRadius: 5, borderColor: '#F2EDED'}}>
            <Image source={require('../../assets/img/search.png')} style={{width:40, height:40}} />
          </View>
        </SearchBtn>
      </Header>

      <CenterView>
        {loading !== true && 
          <>
            <Image source={require('../../assets/img/pokedash.png')} style={{width: 200, height: 300}} />
            <TextProps style={{color:'#FFF'}}> Know some details of your pokemon </TextProps>
          </>
        }

        {loading && data.map(item => {
          return (
            <View style={{alignItems:'center'}} key={item.id}>
              <Image source={require('../../assets/img/trainer.png')} style={{width: 180, height: 180}} />
              <CenterProps>
                <Image source={{ uri: item.img }} style={{ width: 200, height: 200, marginLeft: 4, }} />
                <View>
                  <TextProps>Name: {item.name}</TextProps>
                  <TextProps>Type: {item.type} </TextProps>
                  <TextProps>Abilities: {item.abilities} </TextProps>
                  <TextProps>Weight: {item.weight} </TextProps>
                  <TextProps>Height: {item.height} </TextProps>
                </View>
              </CenterProps>
            </View>
          );
        })}
      </CenterView>
    </Container>
  );
};

export default SearchPokemon;
