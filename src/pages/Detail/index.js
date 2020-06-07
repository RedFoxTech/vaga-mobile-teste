import React, { useState, useEffect } from 'react';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo1.png';

import styles from './styles';


export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();
  const [response, setReponse] = useState([]);
  const [incidentsdetails, setIncidentsDetails] = useState([]);
  const [incidentsimg, setIncidentsImg] = useState([]);
  const [incidentsability, setIncidentsAbility] = useState([]);

  const incident = route.params.incident;

  function navigateBack() {
    navigation.goBack()
  }

  useEffect(() => {
    api.get(`pokemon/${incident.name}`).then(response => {
      setIncidentsAbility(response.data.abilities);
      setIncidentsImg(response.data.sprites);
      setIncidentsDetails(response.data);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>

          <View style={styles.backButton}>
            <TouchableOpacity style={styles.backButton} onPress={navigateBack}>
              <Icon name="arrow-back" size={28} color="#365999" />
              <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
          </View>

          <Image source={logoImg} />

        </View>

        <ScrollView vertical
          showsVerticalScrollIndicator={false}>

          <View style={styles.incident}>

            <ScrollView horizontal
              style={styles.scrollImg}
              contentContainerStyle={{ paddingHorizontal: -10 }}>

              <View style={styles.pokemonImgBox}>
                <Image source={{ uri: incidentsimg.front_default }}
                  style={styles.pokemonImg}
                />
              </View>
              <View style={styles.pokemonImgBox}>
                <Image source={{ uri: incidentsimg.back_default }}
                  style={styles.pokemonImg}
                />
              </View>
              <View style={styles.pokemonImgBox}>
                <Image source={{ uri: incidentsimg.front_shiny }}
                  style={styles.pokemonImg}
                />
              </View>
              <View style={styles.pokemonImgBox}>
                <Image source={{ uri: incidentsimg.back_shiny }}
                  style={styles.pokemonImg}
                />
              </View>
            </ScrollView>

            <View style={styles.incidentDetails}>

              <Text style={styles.incidentId}>ID: #{incidentsdetails.id}</Text>
              <Text style={styles.incidentName}>{incidentsdetails.name}</Text>

              <Text style={styles.incidentProperty}>Altura:</Text>
              <Text style={styles.incidentValue}>{incidentsdetails.height / 10} m</Text>

              <Text style={styles.incidentProperty}>Peso:</Text>
              <Text style={styles.incidentValue}>{incidentsdetails.weight / 10} kg</Text>

              <Text style={styles.incidentProperty}>Experiência base:</Text>
              <Text style={styles.incidentValue}>{incidentsdetails.base_experience}</Text>

              <Text style={styles.incidentProperty}>Habilidades:</Text>
              <View style={styles.abilityView}>

                {incidentsability.map(item => (
                  <View key={String(item.ability.name)} style={styles.incidentAbilityBox}>
                    <Text style={styles.incidentAbilityText}>{item.ability.name}</Text>
                  </View>
                ))}

              </View>
            </View>
          </View>
        </ScrollView>
      </View >
    </SafeAreaView>
  );
}
