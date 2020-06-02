import React, { Component } from 'react';

import {View, Text, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';

import Axios from 'axios';

export default class Main extends Component {
    
    static navigationOptions = {
        title: 'Pokémon',
        headerTintColor: "#fff",
        headerStyle: {
            backgroundColor: '#a61717'
          },
          headerTitleStyle: {
            fontWeight: "200",
            fontSize: 30,
            textAlign:"center",
          }
    };


    state = {
        pokemon: [],
    };

    componentDidMount() {
        Axios.get("https://pokeapi.co/api/v2/pokemon/").then(res => {
          const pokemon = res.data.results;
          this.setState({ pokemon });
        });       
      }

      
    render(){


        return (
            <ScrollView style = {styles.Container}>
            
            <Image source={{uri: 'https://imgur.com/PbA8lkQ'}}/>

            {this.state.pokemon.map(pokemon => {
              
              return <View style = {styles.Box}>
                        
                        <Text style = {styles.Text}>{pokemon.name}</Text>
                        
                    
                        <Text style = {styles.desc}>Clique no botão abaixo para mais informações</Text>
            
                        <TouchableOpacity style={styles.Button} onPress={() => { 
                            this.props.navigation.navigate("Details", {Link:pokemon.url}); 
                            }}>

                            <Text style={styles.pokemonText}>Acessar</Text>

                        </TouchableOpacity>

                    </View>; 
            })}
            
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({

    Container: {
        marginTop:10,
    },

    title:{
        fontSize:29,
        fontWeight:"bold",
        paddingLeft:22,
        borderBottomColor: "#3a86ff",
        paddingBottom:10,
        marginTop:10,
        marginBottom:5,
        backgroundColor:"#ffbe0b",
    },

    desc: {
        textAlign:"center",
    },

    Box: {
        backgroundColor:"#3c7fe8",
        borderWidth:1,
        borderColor: '#ddd',
        borderRadius:5,
        padding:20,
        marginBottom:10
    },

    Button:{
        height: 42,
        borderRadius: 5,
        borderWidth:2,
        backgroundColor: '#ffca08',
        justifyContent:'center',
        alignItems: "center",
        marginTop:10
    },

    Text: {
        fontSize:29,
        color:"#fff",
        fontWeight:"bold",
        textAlign:"center",
    },

    pokemonText:{
        color:"#a61717",
        fontSize:22,
        fontWeight:'bold',
    },

});