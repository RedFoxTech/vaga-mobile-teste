import React, {useState} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import axios from "axios";
import {Ionicons} from '@expo/vector-icons'
import styles from '../styles/ChoicePokemonStyle'
export default function ChoicePokemon({navigation}){
    
    const [pokemons, setPokemons] = useState([])

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    .then((response) => setPokemons(response.data.results))
    .catch()

    return(
        
        <SafeAreaView style={styles.container}>
             <View style={styles.backScreen}>
                <Image style={styles.iconImage} source={require('../images/icon.png')}></Image>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons  name="md-arrow-back" size={40} color="#FFF"/>
                    </TouchableOpacity>
                </View>
            <View style={styles.boxButtons}>
            <Text style={styles.choiceType}>Escolha um Pokemon</Text>
                <FlatList
                style={styles.buttons}
            data= {pokemons}
            keyStractor={(pokemon)=> pokemon.name}
            contentContainerStyle= {{flexGrow: 1}}
            renderItem={typesShow}
            />
            </View>
           
               

        </SafeAreaView>
    );
    function typesShow(item){

        const {name, url} = item.item

        const numPokemon = url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
        const imageUrl = "https://pokeres.bastionbot.org/images/pokemon/"+numPokemon+".png"

     return(
        
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Pokemon',{nomePokemon: name})}>
             <Image style={styles.image} source={{uri: imageUrl}}></Image>
            <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
        
     )
    }
}


