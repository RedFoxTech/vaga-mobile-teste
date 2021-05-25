import React from 'react'
import { FlatList, Image, View, Animated } from 'react-native'

import Pokedash from '../../models/Pokedash'

import { Container, Header, Title } from './AllPokemons.styles';

import PokeRender from '../../components/PokeRender/PokeRender';


const LoadingBlock = () => {
    return(
        <View style={{alignItems:'center'}}>
            <Title> Carregando... </Title>
            <Image source={require('../../assets/img/jogos.png')} style={{width: 50, height: 50}} />
        </View>
    );
}

export default function AllPokemons() {

    
    const [pokemons, setPokemons] = React.useState<any[]>([])
    const [loading, setLoading] = React.useState(false)

    

    React.useEffect(() => {
        async function loadData() {
            try {
                const poke = await Pokedash('/pokemon?limit=100')
                setPokemons(poke)
                console.log(poke)
            } catch (error) {
                console.log(error)
            }
        }
        setLoading(true)
        loadData();
    }, []);
    

    return (
        <Container>
            <Header>
                <Title>Pokemon</Title>
                <Image source={require('../../assets/img/pokebola.png')} style={{ width: 80, height: 80 }} />
            </Header>
            
            {loading ? <FlatList
                data={pokemons}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <PokeRender data={item} />}
            /> : <LoadingBlock />}

        </Container>
    )
}


