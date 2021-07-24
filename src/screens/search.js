import React, { useState } from 'react'
import { 
  TouchableOpacity, 
  Dimensions,
  StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components/native'

import Card from '../components/card'
import { pokeApi } from '../services/pokeApi'
import {
  Content
} from '../styles/global'

const widthDimensions = Dimensions.get('window').width

const SearchArea = styled.View`
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  margin: 8px;
  border-radius: 8px;
  shadow-color: #000;
  shadow-offset: {
    width: 0,
    height: 2,
  };
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`
const SearchInput = styled.TextInput`
  border-radius: 8px;
  flex: 1;
  fontSize: 24px;
  padding: 8px 16px;
`
const CardArea = styled.TouchableOpacity`
  width: ${widthDimensions - 16}px;
  margin: 10px;
`

let timer = null
export const SearchScreen = ({ route, navigation }) => {
  const [pokemon, setPokemon] = useState(null)
  const [search, setSearch] = useState(null)

  const getPokemon = async(value) => {
    try {
      if(value != null && String(value).length > 0) {
        const res = await pokeApi.get(`/${String(value).toLowerCase()}`)
        await setPokemon(res.data)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleSearch = (value) => {
    setSearch(value)
    
    clearTimeout(timer)
    timer = setTimeout(() => {
      getPokemon(value)
    }, 1000)
  }

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  const renderItem = () => {
    if(pokemon != null) {
      const name = String(pokemon.name).capitalize()
      return (
        <CardArea onPress={() => navigation.navigate("Details", {title: name, id: pokemon.id})}>
          <Card 
            cover={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            title={name}
            id={pokemon.id}
          />
        </CardArea>
      )   
    }else{
      return null
    }
  }

  return (
    <Content>
      <StatusBar
        animated={true}
        barStyle='light-content'
        backgroundColor="#f00"
      />
      <SearchArea>
        <SearchInput
        value={search}
          onChangeText={value => handleSearch(value)}
        />
        <TouchableOpacity
          style={{
            paddingHorizontal: 16
          }}
          onPress={() => getPokemon(search)}
        >
          <Icon name="send" color={"#F00"} size={25} />
        </TouchableOpacity>
      </SearchArea>
      {renderItem()}
    </Content>
  )
}