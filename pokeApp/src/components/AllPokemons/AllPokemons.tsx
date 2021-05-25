import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import api from '../../services/api';

export default function AllPokemons() {
    const [pokemons, setPokemons] = React.useState<any[]>([])
    
    React.useEffect(() => {
        async function loadData() {
            try {
                const response = await api.get('/pokemon?limit=100');

            
                setPokemons(response.data.results)

                // console.log(pokemons)
            } catch (error) {
                console.log(error)
            }
        }
        loadData();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            
            <FlatList
                data={pokemons}
                keyExtractor={item => item.name}
                renderItem={({item}) => {
                    const {name, url} = item
                    const URL = url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')
                    const urlImage = `https://pokeres.bastionbot.org/images/pokemon/${URL}.png`
                    
                    return(
                        <View>
                            <Image source={{uri: urlImage}} style={{width: 50, height: 50}}/>
                            <Text> {name} </Text>
                        </View>
                    );
                }}
            />
            
        </View>
    )
}
