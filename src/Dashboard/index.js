import React, { useState } from 'react';
import {Text, TextInput, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import dataPokeApi from '../dataPokeApi';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function Dashboard(props){
    const [pokemons, setPokemons] = useState(dataPokeApi);
    const navigation = useNavigation();
    const toFirstCharUppercase = name => name.charAt(0).toUpperCase() + name.slice(1);


    async function loadPokemons(){
        const response = await api.get(pokemons);

        setPokemons(response.data);
    }
    function navigationToDetalhes(pokemons){
        navigation.navigate('Detalhes', {pokemons})
    }
      
      
    return(
         
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name="filter" size={18} color="#FFF"/>
                </TouchableOpacity>
                <Text></Text>
                <TextInput
                    style={styles.inputBusca}
                    onChangeText={text => onChangeText(text)}
                    placeholder={'Search..'}
                    placeholderTextColor={"#FFF"}
                    textAlign={'center'}
                    onPress={() => navigation.navigate('Card')}
                />
            </View>
            <FlatList 
                data={pokemons}
                style={styles.dashView}
                keyExtractor={pokemons => String(pokemons.id)}
                renderItem={({item: pokemons}) => (
                    <LinearGradient style={ styles.card} colors={['#868f96', '#596164']}>
                        <Image source={{uri: pokemons.imagePoke}} style={styles.ImgPoke} />
                        <View style={styles.containerCard}>
                            <Text style={styles.titulo}>{`${toFirstCharUppercase(pokemons.name)}`}</Text>
                            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                {pokemons.types.map((item, index)=>(
                                    <Text style={styles.cardType}>{`${toFirstCharUppercase(item)}`}</Text>
                                ))}
                            </View>
                            <TouchableOpacity style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}} onPress={() => navigationToDetalhes(pokemons)}>
                                <Text style={styles.detalhes}>More details</Text>
                                <Feather name="chevrons-right" size={16} color="#FFF"/>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                )}
            />
        </View>
    )
}

