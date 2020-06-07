import React, { useState, useEffect } from 'react';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo1.png';

import styles from './styles';


export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [header, setHeader] = useState([]);
  const [total, setTotal] = useState();
  const [offset, setOffset] = useState(0);
  const [incidentid, setIncidentId] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  function navigateToDetail(incident) {
    navigation.navigate('Detail', { incident });
  }

  async function loadHeader() {
    const response = await api.get('pokemon');
    setHeader(response.data);

  }


  ///////////  Função para scroll infinito

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get(`pokemon/?limit=20&offset=${offset}`);

    setIncidents([...incidents, ...response.data.results]);
    setTotal(header.count);
    setOffset(offset + 20);
    setLoading(false);

  }

  ////////////////////////

  useEffect(() => {
    loadHeader();
    loadIncidents();

  }, []);



  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>

        <View style={styles.header}>
          <Image source={logoImg} />
          <Text style={styles.headerTextBold}> Bem-Vindx!</Text>
        </View>

        <FlatList
          data={incidents}
          style={styles.incidentList}
          keyExtractor={incident => String(incident.name)}
          showsVerticalScrollIndicator={false}

          onEndReached={loadIncidents}
          onEndReachedThreshold={0.2}

          renderItem={({ item: incident }) => (
            <View style={styles.incident}>
              <TouchableOpacity
                onPress={() => navigateToDetail(incident)}
                      >
                
                <Text style={styles.incidentValue}>{incident.name}{incident.id}</Text>
                {}
                <View
                  style={styles.detailsButton}
                  onPress={() => navigateToDetail(incident)}
                >
                  <Text style={styles.detailsButtonText}>Ver mais informações</Text>
                  <Icon name="add" size={16} color="#365999" />
                </View>
              </TouchableOpacity>
            </View>
          )}

        />
      </View>
    </SafeAreaView>
  );
}
