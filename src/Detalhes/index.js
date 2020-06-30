import React, {useRef, useState, useEffect} from 'react';
import {Text, Image, View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default function Detalhes(){
    const navigation = useNavigation();
    const route = useRoute();
    const toFirstCharUppercase = name => name.charAt(0).toUpperCase() + name.slice(1);
    const pokemon = route.params.pokemons;
    
    function navigationToBack(){
        navigation.goBack()
    }

    
    return(
        <View style={styles.container}>
            <LinearGradient style={styles.dashView} colors={['#F84446', '#f4090a']}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigationToBack()}>
                        <Feather name="chevron-left" size={30} color="#FFF"/>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Image source={{uri: pokemon.imagePoke}} style={styles.ImgPoke} />
                </View>
            </LinearGradient>
            <View style={styles.dashView2}>
                <View style={styles.cadTitulo}><Text style={styles.titulo}>{`${toFirstCharUppercase(pokemon.name)}`}</Text></View>
                <View style={styles.cadType}>
                    {pokemon.types.map((item, index)=>(
                        <Text style={styles.nameType}>{`${toFirstCharUppercase(item)}`}</Text>
                    ))}
                </View>
                <View style={styles.info}>
                    <View style={{alignItems: 'center',marginHorizontal: 20}}>
                        <Text style={styles.valueinfo}>{pokemon.weight} Kg</Text>
                        <Text style={styles.nameinfo}>Weight</Text>
                    </View>
                    <View style={{alignItems: 'center', marginHorizontal: 20}}>
                        <Text style={styles.valueinfo}>{pokemon.height} m</Text>
                        <Text style={styles.nameinfo}>Height</Text>
                    </View>
                </View>
                <ScrollView style={styles.baseStats}>
                    <View style={styles.cadTitulo}><Text style={[styles.titulo, {fontSize:20}]}>Base Stats</Text></View>
                    <View style={styles.lineStats}>
                        <Text style={styles.subtitulo}>HP</Text>
                        <Text style={[styles.subtitulo, {fontWeight:'bold',}]}>{pokemon.base_hp}</Text>
                        <Text style={{color:'#FFF', fontSize:12, marginLeft:-5}}>/300</Text>
                        <View style={styles.progressBar}>
                            <View style={[styles.colorBar , {backgroundColor:'#F84446', width:`${pokemon.base_hp/3}%`}]}/>
                        </View>
                    </View>
                    <View style={styles.lineStats}>
                        <Text style={styles.subtitulo}>XP</Text>
                        <Text style={[styles.subtitulo, {fontWeight:'bold',}]}>{pokemon.base_experience}</Text>
                        <Text style={{color:'#FFF', fontSize:10, marginLeft:-10}}>/500</Text>
                        <View style={styles.progressBar}>
                            <View style={[styles.colorBar , {backgroundColor:'#4565F6', width:`${pokemon.base_experience/5}%`}]}/>
                        </View>
                    </View>
                    <View style={styles.lineStats}>
                        <Text style={styles.subtitulo}>ATK</Text>
                        <Text style={[styles.subtitulo, {fontWeight:'bold',}]}>{pokemon.base_att}</Text>
                        <Text style={{color:'#FFF', fontSize:12, marginLeft:-5}}>/300</Text>
                        <View style={styles.progressBar}>
                            <View style={[styles.colorBar , {backgroundColor:'#FFCC00', width:`${pokemon.base_att/3}%`}]}/>
                        </View>
                    </View>
                    <View style={styles.lineStats}>
                        <Text style={styles.subtitulo}>DEF</Text>
                        <Text style={[styles.subtitulo, {fontWeight:'bold',}]}>{pokemon.base_def}</Text>
                        <Text style={{color:'#FFF', fontSize:12, marginLeft:-5}}>/300</Text>
                        <View style={styles.progressBar}>
                            <View style={[styles.colorBar , {backgroundColor:'#9EAF01', width:`${pokemon.base_def/3}%`}]}/>
                        </View>
                    </View>
                    <View style={styles.lineStats}>
                        <Text style={styles.subtitulo}>SPD</Text>
                        <Text style={[styles.subtitulo, {fontWeight:'bold',}]}>{pokemon.base_spe}</Text>
                        <Text style={{color:'#FFF', fontSize:12, marginLeft:-5}}>/300</Text>
                        <View style={styles.progressBar}>
                            <View style={[styles.colorBar , {backgroundColor:'#809aeb', width:`${pokemon.base_spe/3}%`}]}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}