import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
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
	<View style={styles.centerView}>
	    <Image style={{width: 200, height: 200}} source={{uri: route.params.image}}/>
	    <Text style={styles.titleText}>Nome: {details.name}</Text>
	    <Text>Peso: {details.weight}</Text>
	    <Text>Tipo: {details.types[0].type.name}</Text>
	    <Text>Altura: {details.height}</Text>
	    <Text>Habilidade: {details.abilities[0].ability.name}</Text>
	</View>
    ) : (
	<View style={styles.centerView}>
	    <Text style={styles.titleText}>Carregando...</Text>
	</View>
    )
}
export default Details;

const styles = StyleSheet.create({
    centerView: {
	flex: 1,
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
    },

    titleText: {
	textAlign: 'center',
	fontWeight: 'bold',
    },
})
