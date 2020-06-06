import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import api from '../../services/api';

// Code @Matheus Ferro Raimundo
// matheusferroraimundo@gmail

class Home extends Component {
    state = {
        nome: "",
        img: "",
        altura: "",
        peso: "",
        ability: [],
        results: []
    };

    componentDidMount() {
        this.loadPokemon();
    }

    loadPokemon = async () => {
        const response = await api.get('/pokemon/');
        const { results } = response.data;
        this.setState({ results });
        console.log(results);
    }

    buscarPokemon = async () => {
        const lowCase = this.state.nome.toLowerCase();

        try {
            const response = await api.get('/pokemon/' + lowCase)
            const { name, abilities, height, weight } = response.data;
            const { front_default } = response.data.sprites;

            this.setState({
                nome: name,
                img: front_default,
                ability: abilities,
                altura: height,
                peso: weight
            });

            this.props.navigation.navigate('Sobre', {
                name: this.state.nome,
                image: this.state.img,
                abilities: this.state.ability,
                altura: this.state.altura,
                peso: this.state.peso,
            });

            console.log(response);
        } catch (error) {
            alert('Esse pokemon não existe!');
        }
    }

    clickPokemon = async (item) => {
        const response = await api.get('/pokemon/' + item.name)
        const { front_default } = response.data.sprites;
        const { abilities, height, weight } = response.data;
        this.setState({
            img: front_default,
            ability: abilities,
            altura: height,
            peso: weight
        })

        this.props.navigation.navigate('Sobre', {
            name: item.name,
            image: this.state.img,
            abilities: this.state.ability,
            altura: this.state.altura,
            peso: this.state.peso
        });
    }

    renderItem = ({ item }) => (
        <View style={styles.pokemonContainer}>
            <Text style={styles.pokemonNome}>{item.name}</Text>
            <Text style={styles.descricao}>Clique no botão para ver a descrição e imagem do pokemon</Text>
            <TouchableOpacity style={styles.btnDescricao} onPress={() => this.clickPokemon(item)}>
                <Text style={styles.txtBtnDescricao}>Ver detalhes</Text>
            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            <SafeAreaView style={styles.content}>
                <Text style={styles.txtPokemonListado}>* Você pode buscar por pokemons que não estão na lista</Text>

                <View style={styles.containerBuscar}>
                    <TextInput
                        style={styles.txtInput}
                        placeholder="Digite o nome do pokemon"
                        onChangeText={(value) => this.setState({ nome: value })}
                    />
                    <Button
                        title="Buscar"
                        onPress={this.buscarPokemon}
                    />
                </View>
                <View style={styles.container}>
                    <FlatList
                        contentContainerStyle={styles.listContainer}
                        data={this.state.results}
                        keyExtractor={item => item.name}
                        renderItem={this.renderItem}
                    />
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#f0f0f5",
        // #5C99FA
    },
    containerBuscar: {
        alignItems: "center",
        flexDirection: "row",
        padding: 20,
    },
    txtInput: {
        padding: 5,
        borderBottomWidth: 1,
        borderColor: "#021032",
        color: "black",
        fontSize: 15,
        borderRadius: 5,
        flex: 1,
    },
    txtPokemonListado: {
        fontSize: 13,
        margin: 10,
        marginBottom: 0
    },
    container: {
        marginTop: 10,
    },
    listContainer: {
        padding: 20
    },
    pokemonContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderRadius: 5,
        padding: 20,
        marginBottom: 30,

    },
    pokemonNome: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 10
    },
    descricao: {
        fontSize: 13,
        textAlign: "center",
        color: "#383838",
    },
    btnDescricao: {
        height: 40,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 5,
    },

})


export default Home;

