import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    FlatList,
    ListItem,
    TouchableOpacity,
} from 'react-native';

const apiUrl = "https://pokeapi.co/api/v2/pokemon/"

const Details = (props) => {
    const [details, setDetails] = useState([]) 	

    useEffect(() => {
	fetchDetails()
    }, [])

    const fetchDetails = () => {
	const {state} = props.navigation
	fetch(apiUrl + state.params.pokemon)
	    .then(res => res.json())
	    .then(details => setDetails(details));
    }
}
export default Details;
