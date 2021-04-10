import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    ListItem,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';

const apiUrl = "https://pokeapi.co/api/v2/pokemon/"

const List = ({navigation}) => {
    useEffect(() => {
	getPokes()
    }, [])

    const [pokes, setPokes] = useState([])
    const [search, setSearch] = useState('')

    const getPokes = () => {
	fetch(apiUrl)
	.then(response => response.json())
	.then(pokes => setPokes(pokes.results))
    }

    const pokeId = (id) => {
	id = id.toString()
	const paddednum = id.padStart(3, '0');
	return paddednum
    }

    //@@@FIXME(0xbiel): A URL da imagem está sendo repetida porque
    //quando colocada em uma variável, a variável 'index'
    //deixa de existir, retornando um erro.

    return (
	<View> 
	    <TextInput
		placeholder="Search"
		onChangeText={value => setSearch(value)}
		value={search}
	    /> 
	    <ScrollView style={styles.pokeWrapper}>
		<View style={styles.container}>
		    {pokes.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())).map((pokemon, index) => {
			return (
			    <TouchableOpacity
				key={index}
				onPress={() =>
				    navigation.navigate('Details', {
				    pokemon: pokemon.name,
				    //PokeAPI não oferece imagens.
				    //Pegando do site oficial do Pokemon.
				    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeId(index + 1,)}.png`,
				})
			    }>
			    <Image
				style={{width: 100, height: 100}}
				source={{
				//PokeAPI não oferece imagens.
				//Pegando do site oficial do Pokemon.
				uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeId(index + 1,)}.png`,
				}}
			    />
			    <Text>{pokemon.name}</Text>
			    </TouchableOpacity>
		    );
		})}
	    </View>
      </ScrollView>
    </View>
    )
}


export default List;

const styles = StyleSheet.create({})
