import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

const Details = ({route, navigation}) => {
    const [details, setDetails] = useState([]) 	

    useEffect(() => {
	fetchDetails()
    }, [])

    const fetchDetails = () => {
	fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.pokemon}`)
	    .then(res => res.json())
	    .then(details => {
		setDetails(details)
		return details
	    })
    }

    return details.name ? (
	<View>
	    <Image style={{width: 50, height: 50}} source={{uri: route.params.image}}/>
	    <Text>Nome: {details.name}</Text>
	    <Text>Peso: {details.weight}</Text>
	    <Text>Tipo: {details.types[0].type.name}</Text>
	    <Text>Altura: {details.height}</Text>
	</View>
    ) : (
	<View>
	    <Text>Carregando...</Text>
	</View>
    )
}
export default Details;
