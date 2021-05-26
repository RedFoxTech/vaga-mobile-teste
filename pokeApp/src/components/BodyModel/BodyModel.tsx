import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import api from '../../services/api'

export default function BodyModel({name, closed}) {
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
        //   console.log(pokemonData)
        } catch (error) {
          console.log(error)
        }
      }
  
      React.useEffect(() => {
              
          loadData()
          return;
      },[pokemonData])
    return (
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'#FFF', width: 300, height:400, borderRadius: 5}}>
                           
                <Button title="Close" onPress={() => closed()} />


                <Text> {name} </Text>
                            
                {pokemonData.map(item =>
                <View key={item.id}>
                    <Image source={{uri: item.img}} style={{ width: 200, height: 200, marginLeft: 4 }} />
                    <Text>Name: {item.name}</Text>
                    <Text>Ability: {item.abilities}</Text>
                    <Text>Height: {item.height}</Text>
                    <Text>Weight: {item.weight}lbs</Text>
                    <Text>Type: {item.type}</Text>
                </View>)}
            </View>
        </View>
    )
}
