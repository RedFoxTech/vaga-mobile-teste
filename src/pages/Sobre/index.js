import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const Sobre = ({ route }) => {
    const
        name = route.params?.name.toUpperCase(),
        img = route.params?.image,
        peso = route.params?.peso,
        altura = route.params?.altura,
        abilities = route.params?.abilities;

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.txtNome}>{name}</Text>
            <View style={styles.containerImg}>
                <Image
                    style={styles.img}
                    source={{ uri: img, }}
                />

                <View style={styles.containerHabilidades}>
                    <Text style={styles.txtTitle}>Habilidades</Text>
                    {abilities.map(item => (
                        <Text style={styles.txtHabilidades} key={item.ability.name}>{item.ability.name}</Text>
                    ))}
                    <View style={styles.containerAtributos}>
                        <Text style={styles.txtTitle}>Atributos</Text>
                        <Text style={styles.atributos}>Peso: {peso} kg</Text>
                        <Text style={styles.atributos}>Altura: {altura} m</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    txtNome: {
        fontSize: 40,
        fontWeight: "bold",
    },
    txtTitle: {
        fontSize: 20,
        marginBottom: 5,
    },
    txtHabilidades: {
        fontSize: 15,
    },
    containerImg: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        backgroundColor: "#f9f9f9"
    },
    img: {
        width: 200,
        height: 200,
        marginRight: 20,
        resizeMode: 'stretch',
    },
    containerAtributos: {
        marginTop: 20
    }
})


export default Sobre;