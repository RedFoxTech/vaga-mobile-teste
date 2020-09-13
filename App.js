import React, { useState, useEffect } from 'react';
import {  Text } from 'react-native';

import Card from './src/components/Card';
import NavigationBar from './src/components/NavigationBar';

import { getAllPokemons, getPokemon } from './src/services/pokemon';

import { Wrapper, Container, Loading, Main, ButtonContainer, Button } from './AppStyles';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await  getAllPokemons(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemons(nextUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;

    setLoading(true);
    let data = await getAllPokemons(prevUrl)
    await loadingPokemon(data.results)
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord
    }))

    setPokemonData(_pokemonData);
  }

  pokemonData.sort(function (x, y) {
    let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
  })

  return (
    <Wrapper>
      { loading 
        ? <Loading>Loading...</Loading> 
        : (
          <Container>
            <NavigationBar />
            <ButtonContainer>
              <Button onPress={prev} title="Prev">Prev</Button>
              <Button onPress={next} title="Next">Prev</Button>
            </ButtonContainer>
            <Main>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />
              })}
            </Main>
            <ButtonContainer>
              <Button onPress={prev} title="Prev">Prev</Button>
              <Button onPress={next} title="Next">Prev</Button>
            </ButtonContainer>
          </Container>
        )
      }
    </Wrapper>
  )
}

export default App;