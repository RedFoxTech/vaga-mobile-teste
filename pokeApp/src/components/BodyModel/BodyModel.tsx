import React from 'react'
import { View, Image } from 'react-native'

import { Container, CenterView, TouchClose, TextDetails, Header } from './BodyModel.styles'
import api from '../../services/api'

import Icon from 'react-native-vector-icons/FontAwesome'

export default function BodyModel({ name, closed }: any) {
  const [pokemonData, setPokemonData] = React.useState<any[]>([])

  async function loadData() {

    try {
      const response = await api.get(`/pokemon/${name}`)

      const pokemonAdapter = async () => {
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

      const details = await pokemonAdapter()
      setPokemonData(details)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {

    loadData()
    return;
  }, [pokemonData])
  return (
    <Container>
      <Header>
        <TouchClose onPress={() => closed()} >
          <Icon name="window-close" color="#E74233" size={25} />
        </TouchClose>
      </Header>

      <CenterView>

        <Image source={require('../../assets/img/gotcha.png')} style={{width:80, height: 50, marginTop: 5, marginBottom: -20}} />

        {pokemonData.map(item =>
          <View key={item.id}>
            <Image source={{ uri: item.img }} style={{ width: 200, height: 200, marginLeft: 4, marginBottom: -15 }} />
            <TextDetails>Name: {item.name}</TextDetails>
            <TextDetails>Ability: {item.abilities}</TextDetails>
            <TextDetails>Type: {item.type}</TextDetails>
            <TextDetails>Height: {item.height}</TextDetails>
            <TextDetails>Weight: {item.weight}lbs</TextDetails>
          </View>)}
      </CenterView>
    </Container>
  )
}
