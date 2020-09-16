import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import Axios from 'axios';

import {
  ContainerList,
  Container,
  Name,
  ContainerSearch,
  Image,
  ContainerButton,
  TextId,
  TypeText,
  TextContainer,
  TypeContainer,
  TypesContainer,
  ButtonPage,
  ContainerComponents,
  ContainerButtons,
  InputSearch,
  ButtonSearch,
  TextNameTypeSearch,
  ContainerTypesSearch,
  TextNameType,
  ButtonType,
  ContainerButtonType,
  Icon,
} from './styles';

import {api} from '../../services/api';

import Header from '../../components/Header/';

import circleCheckIcon from '../../assets/whh_circleselect.png';
import circleIcon from '../../assets/clean.png';

function Home({navigation}) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [renderSearch, setRenderSearch] = useState(false);
  const [searchType, setSearchType] = useState('nome');
  const [renderTypes, setRenderTypes] = useState(false);
  const [results, setResults] = useState(false);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState();

  async function loadPokemons() {
    const response = await api.get(`/pokemon/?limit=10&offset=${offset}`);
    setPokemonDetails([]);
    setPokemons(response.data.results);
  }

  async function loadSearch() {
    if (searchType === 'nome') {
      const response = await api.get(`/pokemon/${search.toLowerCase()}`);
      setSearch();
      setPokemons(response.data);
      setPokemonDetails([response.data]);
      setResults(true);
    } else if (searchType === 'tipo') {
      const response = await api.get(`/type/${search.toLowerCase()}`);
      setSearch();
      setPokemons(response.data.pokemon);
      setPokemonDetails([]);
    }
  }

  useEffect(() => {
    loadPokemons();
  }, [offset]);

  useEffect(() => {
    async function loadDetails() {
      if (pokemons) {
        pokemons.map((pokemon) => {
          let url = pokemon.url;
          if (searchType === 'tipo') {
            url = pokemon.pokemon.url;
          }
          Axios.get(url).then((response) => {
            if (pokemonDetails.length === 10 && searchType === 'nome') {
              return '';
            } else {
              setPokemonDetails((oldArray) => [
                ...oldArray,
                {
                  name: response.data.name,
                  id: response.data.id,
                  imageUrl: response.data.sprites.front_default,
                  types: response.data.types,
                  height: response.data.height,
                  weight: response.data.weight,
                },
              ]);
            }
          });
        });
      }
    }
    if (results === false || searchType === 'tipo') {
      loadDetails();
    }
  }, [pokemons]);

  async function setOnRenderSearch() {
    setRenderSearch(!renderSearch);
  }
  async function setOnRenderTypes() {
    setRenderTypes(!renderTypes);
  }

  const renderPokemons = (item) => {
    return (
      <>
        <ContainerButton onPress={() => navigation.navigate('Details', item)}>
          <View
            style={
              {
                flex: 1,
                height: '100%',
                flexDirection: 'row',
                backgroundColor: '#ffffff',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 8,
                padding: 16,
              }
            }
          >
            <TextContainer>
              <TextId>#{results === false ? item.item.id : pokemons.id}</TextId>
              <Name>{results === false ? item.item.name : pokemons.name}</Name>
              <TypesContainer
                data={results === false ? item.item.types : pokemons.types}
                keyExtractor={(type) => String(type.slot)}
                renderItem={(type) => {
                  return (
                    <TypeContainer>
                      <TypeText>{type.item.type.name}</TypeText>
                    </TypeContainer>
                  );
                }}
              />
            </TextContainer>
            <Image
              source={
                results === false
                  ? {uri: item.item.imageUrl}
                  : {uri: pokemons.sprites.front_default}
              }
            />
          </View>
        </ContainerButton>
      </>
    );
  };

  pokemonDetails.sort(function compare(a, b) {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#FA6555"
        translucent
      />
      <Container>
        <Header
          name={'Pokedex'}
          renderSearch={setOnRenderSearch}
          renderTypes={setOnRenderTypes}
          back={false}
        />
        {renderSearch === true ? (
          <View style={{ backgroundColor: '#fff' }}>
            <ContainerSearch>
              <InputSearch
                placeholder="Pesquisar"
                value={search}
                onChangeText={setSearch}
                autoCapitalize="none"
              />
              <ButtonSearch
                onPress={() => {
                  if (search === '') {
                    loadPokemons();
                    setResults(false);
                  } else if (!search) {
                    loadPokemons();
                    setResults(false);
                  } else {
                    loadSearch();
                  }
                }}>
                <Name style={{color: '#fff'}}>Buscar</Name>
              </ButtonSearch>
            </ContainerSearch>
            <TextNameTypeSearch> Deseja buscar por: </TextNameTypeSearch>
            <ContainerTypesSearch>
              <ButtonType
                onPress={() => {
                  setSearchType('nome');
                }}>
                <ContainerButtonType>
                  {searchType === 'nome' ? (
                    <Icon source={circleCheckIcon} />
                  ) : (
                    <Icon source={circleIcon} />
                  )}
                  <TextNameType>Nome</TextNameType>
                </ContainerButtonType>
              </ButtonType>
              <ButtonType
                onPress={() => {
                  setSearchType('tipo');
                }}>
                <ContainerButtonType>
                  {searchType === 'tipo' ? (
                    <Icon source={circleCheckIcon} />
                  ) : (
                    <Icon source={circleIcon} />
                  )}
                  <TextNameType>Tipo</TextNameType>
                </ContainerButtonType>
              </ButtonType>
            </ContainerTypesSearch>
          </View>
        ) : (
          <View />
        )}
        <ContainerComponents>
          <ContainerList
            data={pokemonDetails}
            extraData={results}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={renderPokemons}
          />
          <ContainerButtons>
            <ButtonPage
              onPress={() => {
                if (offset > 0) {
                  setOffset(offset - 10);
                  setPokemonDetails([]);
                } else {
                  return null;
                }
              }}>
              <Name style={{color: '#fff'}}>Anterior</Name>
            </ButtonPage>
            <ButtonPage
              onPress={() => {
                setOffset(offset + 10);
                setPokemonDetails([]);
              }}>
              <Name style={{color: '#fff'}}>Proximo</Name>
            </ButtonPage>
          </ContainerButtons>
        </ContainerComponents>
      </Container>
    </>
  );
}

export default Home;
