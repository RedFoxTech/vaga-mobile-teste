import React, { Component } from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import Axios from 'axios';


export default class Details extends Component {

    static navigationOptions = {
        title: 'Detalhes do Pokémon',
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
        info: [],
        sprites:[],
        types: [],
        base: [],
    };
    

    componentDidMount() {
        Axios.get(this.props.navigation.getParam('Link')).then(res => {
          const sprites = res.data.sprites.front_default;
          const info = res.data.abilities;
          const types = res.data.types;
          const base = res.data;
          this.setState ({base})
          this.setState ({types})
          this.setState ({info})
          this.setState({ sprites });
          
        });
      }


      render(){

        return (


            <View style = {styles.Container}>
            
            <View style = {styles.imgback}>
                <Text style = {styles.ImgText}>Imagem do Pokémon:</Text>  
                <Image style = {styles.Image} source={{ uri: this.state.sprites.toString()}} />
            </View>

            <View style = {styles.Background}>
                <Text style = {styles.Abilities}>Habilidades:</Text>  

                        {this.state.info.map(info => {
                    
                            return <View style = {styles.Box}>
                
                            <Text style = {styles.Text}>* {info.ability.name}</Text>

                            </View>; 
                        })}

                <Text style = {styles.Type}>Tipo:</Text>

                        {this.state.types.map(types => {

                            return <View style = {styles.Box}>

                            <Text style = {styles.Text}>* {types.type.name}</Text>

                            </View>; 

                        })}


                <Text style = {styles.Base}>Base de experiência:</Text>

                <Text style = {styles.Text}>{this.state.base.base_experience}</Text>

                <Text style = {styles.Weight}>Largura:</Text>

                <Text style = {styles.Text}>{this.state.base.weight}</Text>

                <Text style = {styles.height}>Altura:</Text>

                <Text style = {styles.Text}>{this.state.base.height}</Text>
            </View>

            </View>


        );
    }
}


const styles = StyleSheet.create ({

    Background:{
        backgroundColor:"#a61717",
    },

    Image:{
        width:"50%",
        height:150,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:5,
        padding:10,
        marginLeft:"auto",
        marginRight:"auto",
    },

    ImgText: {
        fontSize:25,
        color:"#000",
        fontWeight:"bold",
        paddingLeft:10,
        textAlign:"center",
    },

    Box: {
        borderBottomColor:"#ccc",
    },


    Abilities: {
        fontSize:25,
        color:"#ffca08",
        fontWeight:"bold",
        paddingLeft:10,
        textAlign:"center",
    },

    Type: {
        fontSize:25,
        color:"#ffca08",
        fontWeight:"bold",
        paddingLeft:10,
        textAlign:"center",

    },

    Base:{
        fontSize:25,
        color:"#ffca08",
        fontWeight:"bold",
        paddingLeft:10,
        textAlign:"center",

    },

    Weight:{
        fontSize:25,
        color:"#ffca08",
        fontWeight:"bold",
        paddingLeft:10,
        textAlign:"center",

    },

    height: {
        fontSize:25,
        color:"#ffca08",
        fontWeight:"bold",
        paddingLeft:10,
        textAlign:"center",
    },

    Text: {
        fontSize:22,
        color:"#fff",
        paddingLeft:10,
        textAlign:"center",
        marginBottom:5,
    },



});