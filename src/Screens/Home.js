import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from '../Styles/styles';

class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        headerRight: (
            <Button 
                color="#000"
                title="Go to Pokemons"
                onPress={() => navigation.navigate('Pokemons')}
            />
        )
    })
    render() {
        return (
            <View style={styles.homeDiv}>
                <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1536011005/Pokemon_HomePage_Icon.png'}}
                    style={styles.homePageImage} />
                <Text style={styles.header}>National Dex</Text>
            </View>
        )
    }
}
export default Home;