
//import PoreCompoent for preventing unnecesary updates. 
import React, { PureComponent } from 'react';
//import comopnents
import PokeCard from '../Pokemons/PokemonCard';
//import your components from react-native 
import {  FlatList, ActivityIndicator } from 'react-native';
//import styles for your component
import styles from './styles';

export default class PokeList extends PureComponent {
    //Define your state for your component. 
    state = {
        //Assing a array to your pokeList state
        pokeList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true
    }
    //Define your navigation options in a form of a method so you have access to navigation props.
    static navigationOptions = {
        title: 'List of Pokemon'
    }
    //Define your componentDidMount lifecycle hook that will retrieve data.
    //Also have the async keyword to indicate that it is asynchronous. 
    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const pokemon = await pokemonApiCall.json();
            this.setState({pokeList: pokemon.results, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    render() {
        //Destruct pokeList and Loading from state.
        const { pokeList, loading } = this.state;
        //Destruct navigation from props 
        const { navigation } = this.props;
        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if(!loading) {
            return <FlatList 
                    data={pokeList}
                    renderItem={(data) => <PokeCard {...data.item} navigation={navigation} />}
                    keyExtractor={(item) => item.name} 
                    />
        } else {
            return <ActivityIndicator />
        }
    }
}