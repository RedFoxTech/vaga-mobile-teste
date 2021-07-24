import React, { useEffect, useState } from 'react'
import { 
  View,
  Dimensions, 
  ImageBackground, 
  ScrollView, 
  FlatList 
} from 'react-native'
import styled from 'styled-components/native'
import { Divider, Chip, ChipText } from '../styles/global'

import { pokeApi } from '../services/pokeApi'
import TypeColor from '../styles/typeColor'
import pokeball from '../assets/img/pokeball.jpg'

const widthDimensions = Dimensions.get('window').width

const TitleText = styled.Text`
  font-size: ${widthDimensions * 0.08}px;
  font-weight: bold;
  padding: 0px 32px
`
const TextSubTitle = styled.Text`
  font-size: ${widthDimensions * 0.04}px;
  font-weight: bold;
  padding: 0px 32px
`
const TextContentStats = styled.Text`
  font-size: ${widthDimensions * 0.06}px;
  color: #a4a4a4;
  font-weight: bold; 
`
const TextContentBase = styled.Text`
  font-size: ${widthDimensions * 0.04}px;
  color: #a4a4a4;
  font-weight: bold; 
  padding: 0px 32px 16px 32px;
`
const StatsView = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
`
const ContentView = styled.View`
  background-color: #fff;
  flex: 1;
  width: 100%;
  padding-vertical: 16px;
`

export const DetailsScreen = ({ route, navigation }) => {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    getPokemonDetail()
  },[])

  const getPokemonDetail = async() => {
    const { id } = route.params
    try {
      const res = await pokeApi.get(`/${id}`)
      await setPokemon(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={pokeball}
        style={{
          backgroundColor: '#e3e3e3',
          width: '100%',
          height: Dimensions.get('window').width / (3/2),
          justifyContent: 'center',
          alignItems: 'center'
        }}
        resizeMode='cover'
      >
        <ImageBackground 
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${route.params.id}.png`}}
          style={{
            borderRadius: 180,
            width: 196,
            height: 196,
            marginTop: 20
          }}
          resizeMode='stretch'
        />
      </ImageBackground>
      <ContentView>
        <TitleText>{route.params.title} #{route.params.id}</TitleText>
        <FlatList
          data={pokemon.types}
          renderItem={({item}) => {
            const color = TypeColor.find(type => type.name === item.type.name);
            return (
              <Chip color={color.color}>
                <ChipText color={color.font}>
                  {item.type.name}
                </ChipText>
              </Chip>
            )
          }}
          horizontal={true}
          keyExtractor={(item, index) => index}
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0, paddingHorizontal: 32 }}
        />
        <Divider width={widthDimensions - 64}/>
        <View style={{flexDirection: 'row'}}>
          <StatsView>
            <TextSubTitle>Weight</TextSubTitle>
            <TextContentStats>{(pokemon.weight*0.1)||"0"} KG</TextContentStats>
          </StatsView>
          <StatsView>
            <TextSubTitle>Height</TextSubTitle>
            <TextContentStats>{((pokemon.height*.1)||0).toFixed(2)} M</TextContentStats>
          </StatsView>
        </View>
        <Divider width={widthDimensions - 64}/>
        <TextSubTitle>Base Experience</TextSubTitle>
        <TextContentBase>{(pokemon.base_experience||0)} EXP</TextContentBase>
        <TextSubTitle>Abilities</TextSubTitle>
        <FlatList
          data={pokemon.abilities}
          renderItem={({item}) => {
            return (
              <Chip>
                <ChipText>
                  {item.ability.name}
                </ChipText>
              </Chip>
            )
          }}
          horizontal={true}
          keyExtractor={(item, index) => index}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 8,
            paddingHorizontal: 32,
            marginBottom: 16,
            flexGrow: 0
          }}
        />
        <TextSubTitle>Moves</TextSubTitle>
        <FlatList
          data={pokemon.moves}
          renderItem={({item}) => {
            return (
              <Chip>
                <ChipText>
                  {item.move.name}
                </ChipText>
              </Chip>
            )
          }}
          horizontal={true}
          keyExtractor={(item, index) => index}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingVertical: 8,
            paddingHorizontal: 32 ,
            marginBottom: 16,
            flexGrow: 0,
          }}
        />
      </ContentView>
    </ScrollView>
  )
}