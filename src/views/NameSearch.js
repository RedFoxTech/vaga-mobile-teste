import React, { useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Ionicons} from '@expo/vector-icons'
import styles from '../styles/NameSearchStyle'


export default function NameSearch({navigation}){
    
    const [input, setInput] = useState();
    
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <View style={styles.back}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
              <Ionicons  name="md-arrow-back" size={40} color="#FFF"/>
            </TouchableOpacity>
            </View>


            <View style={styles.inputs}>

            <Text style={styles.title}>Qual o nome do </Text>
            <Text style={styles.title}>Pokemon? </Text>

            <TextInput
            multiline={false}
            placeholderTextColor="#747474"
            autoCorrect={false}
            style={styles.input}
            placeholder="EX: Bulbasaur"
            value={input}
            onChangeText={(nomePokemon) => setInput(nomePokemon)}
            />

            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Pokemon',{nomePokemon: input})}>
                <Text>PESQUISAR</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.pokeball}>
                <Image style={styles.imagePokeball} source={require('../images/home.png')}></Image>
            </View>
      </SafeAreaView>
    );

}

