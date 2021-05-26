import React from 'react'
import { FlatList, Image, View } from 'react-native'

import Pokedash from '../../models/Pokedash'
import { DrawerActions } from '@react-navigation/native';
import { Container, Header, Title } from './AllPokemons.styles';

import PokeRender from '../../components/PokeRender/PokeRender';
import Head from '../../components/Head/Head';


const LoadingBlock = () => {
    return(
        <View style={{alignItems:'center'}}>
            <Title> Carregando... </Title>
            <Image source={require('../../assets/img/jogos.png')} style={{width: 50, height: 50}} />
        </View>
    );
}

export default function AllPokemons({navigation}) {

    
    const [pokemons, setPokemons] = React.useState<any[]>([])
    const [loading, setLoading] = React.useState(false)

    async function loadData() {
        try {
            const poke = await Pokedash('/pokemon?limit=500')
            setPokemons(poke.sort())
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        
        setLoading(true)
        loadData();
    }, []);
    

    return (
        <Container>
            <Head onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
            <Header>
                <Title>Pokemon List</Title>
                <Image source={require('../../assets/img/pokebola.png')} style={{ width: 80, height: 80 }} />
            </Header>
            
            {loading ? <FlatList 
                data={pokemons}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <PokeRender data={item}  />}
            /> : <LoadingBlock />}

        </Container>
    )
}


