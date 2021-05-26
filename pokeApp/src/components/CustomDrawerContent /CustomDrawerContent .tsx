import React from 'react';
import { View, Image, Alert } from 'react-native';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

  import { Button, Text, } from "./CustomDrawerContent .styles";

export default function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={{backgroundColor:'#CCC'}}>
            <View style={{alignItems:'center', marginTop: 10}}>
                <Image source={require('../../assets/img/logo.png')} style={{ width:50, height:50 }} />

                <Button>
                    <Text> Pokemon </Text>
                </Button>
            </View>
            

            <View style={{ marginTop: 20, }}>
                <DrawerItem
                    icon={() =>( <Icon name="book-open" color="#1A1A1A" size={25} /> )}
                    label="Pokemon List"
                    onPress={() => {props.navigation.navigate('AllPokemons')}}
                />

                <DrawerItem
                    icon={() => (<Icon name="database-search" color="#1A1A1A" size={25} />) }
                    label="Search Pokemon"
                    onPress={() => {props.navigation.navigate('SearchPokemon')}}
                />

                <DrawerItem
                    icon={() => (<Icon name="map-outline" color="#1A1A1A" size={25} />)}
                    label="Mapa"
                    onPress={() => Alert.alert('Em breve')}
                />

                <DrawerItem
                    icon={() => (<Icon name="account-details" color="#1A1A1A" size={25} />)}
                    label="Contatos"
                    onPress={() => Alert.alert('marcelorafael23@hotmail.com')}
                />
            </View>
            
        </DrawerContentScrollView>
    )
}