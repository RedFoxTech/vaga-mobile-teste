import React from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from '../styles/ChoiceSearchStyle'


export default function ChoiceSearch({navigation}){
    return(
        <SafeAreaView style={styles.container}>

            <Image style={styles.ash} source={require('../images/ash.png')}></Image>
            
            <View style={styles.logo}>
                <Image style={styles.imageLogo} source={require('../images/logo.png')}></Image>
            </View>

            <View style={styles.buttons}>
            <StatusBar style="auto"/>

            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('NameSearch')}>
                <Text>INSERIR NOME</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('ChoicePokemon')}>
                <Text>EXIBIR LISTA</Text>
            </TouchableOpacity>

            </View>


      </SafeAreaView>

    );
}

