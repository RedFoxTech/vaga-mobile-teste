import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity,  Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/PokemonStyle'
import api from '../services/api'

export default function Pokemon({route, navigation}){

    const nomePokemon = route.params.nomePokemon


    const [numeroPokemon, setNumeroPokemon] = useState([])
    const [ability1Pokemon, setability1Pokemon] = useState([])
    const [ability2Pokemon, setability2Pokemon] = useState([])
    const [pokemonEncontrado, setpokemonEncontrado] = useState(true)

    if(nomePokemon != undefined){
        api.get(nomePokemon.toLowerCase())
        .then((response) => setNumeroPokemon(response.data.id))
        .catch(() => setpokemonEncontrado(false))
        api.get(nomePokemon.toLowerCase())
        .then((response) => setability1Pokemon((response.data.abilities[0].ability.name).replace("-", " ")))
        .catch(function(error){
        })
        api.get(nomePokemon.toLowerCase())
        .then((response) => setability2Pokemon((response.data.abilities[1].ability.name).replace("-", " ")))
        .catch(function(error){
        })


        const imageUrl = "https://pokeres.bastionbot.org/images/pokemon/"+numeroPokemon+".png"
    
        if( pokemonEncontrado != false){
            return(
            
                <SafeAreaView style={styles.container}>
                    <StatusBar style="auto"/>
                     <View style={styles.backScreen}>
                     <Image style={styles.iconImage} source={require('../images/icon.png')}></Image>
                     <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons  name="md-arrow-back" size={40} color="#FFF"/>
                        </TouchableOpacity>
                    </View>
        
                    <View style={styles.cardNameImage}>
                        <Image style={styles.image} source={{uri: imageUrl}}></Image>
                        <Text style={styles.pokemonName}>{numeroPokemon}. {nomePokemon}</Text>
                    </View>
        
                    <View style={styles.cardAbility}>
                        <Text style={styles.titleAbility}>Habilidades</Text>
                        <Text style={styles.ability}>{ability1Pokemon}</Text>
                        <Text style={styles.ability}>{ability2Pokemon}</Text>
                    </View>
        
                    <View style={styles.pokeball}>
                        <Image style={styles.imagePokeball} source={require('../images/pokeball.png')}></Image>
                    </View>
        
                </SafeAreaView>
            );
        }else{
            return(
            
                <SafeAreaView style={styles.container}>
                     <View style={styles.backScreen}>
                     <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons  name="md-arrow-back" size={40} color="#FFF"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.message}>
                        <Image style={styles.imageMessage} source={require('../images/error.png')}></Image>
                        <Text style={styles.textMessage}>Pokemon não encontrado!</Text>
                    </View>
                </SafeAreaView>
            );
        }


    }else{
        return(
            
            <SafeAreaView style={styles.container}>
                 <View style={styles.backScreen}>
                 <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons  name="md-arrow-back" size={40} color="#FFF"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.message}>
                    <Image style={styles.imageMessage} source={require('../images/error.png')}></Image>
                    <Text style={styles.textMessage}>Insira o nome de um Pokemon para ver número e habilidades!</Text>
                </View>
            </SafeAreaView>
        );
   
}
}
