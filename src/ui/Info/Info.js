import React from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import axios from 'axios';

import Picture from 'src/ui/Components/Picture';
import Chip from './Chip';
import Stats from './Stats';
import Chain from './Chain';
import Colors from './Colors';
import Context from 'src/ui/Context';

const capitalize = (string = '') => string.charAt(0).toUpperCase() + string.slice(1);

export default React.memo(({route, navigation}) => {
  const {id} = route.params;
  const [info, infoSet] = React.useState(null);
  const [description, descriptionSet] = React.useState(null);
  const [chain, chainSet] = React.useState(null);
  const [color, colorSet] = React.useState('gray');

  const {screenWidth} = React.useContext(Context);

  React.useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(({data}) => onPokemon(data));
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`).then(data => onSpecies(data));
  }, []);

  const onPokemon = data => {
    infoSet(data);
    navigation.setOptions({title: capitalize(data.name)});
  };

  const onSpecies = ({data: {color, flavor_text_entries: flavors, evolution_chain: chain}}) => {
    descriptionSet(
      flavors
        ?.filter(f => f.language.name === 'en' && f.version.name === 'alpha-sapphire')?.[0]
        ?.flavor_text.replace(/\n/g, ' '),
    );
    chainSet(chain.url);
    colorSet(Colors[color.name]);
  };

  if (!info) return <ActivityIndicator style={s.spinner} size={screenWidth / 4} color="gray" />;

  const name = capitalize(info.name);
  const height = info.height < 10 ? `${info.height * 10} cm` : `${info.height / 10} m`;
  const weight = `${info.weight / 10} Kg`;
  const pictureWidth = {width: screenWidth / 2, height: screenWidth / 2};

  return (
    <ScrollView style={s.container}>
      <View style={[s.picture, s.separator]}>
        <Picture id={id} style={pictureWidth} />
      </View>
      <Text style={[s.name, s.separator, {color}]}>{name}</Text>
      <View style={[s.chips, s.separator]}>
        <Chip text={weight} color={color} style={s.weight} />
        <Chip text={height} color={color} />
        {info.types.map(type => (
          <Chip key={type.slot} text={type.type.name} color={color} />
        ))}
      </View>
      <Text style={s.separator}>{description}</Text>
      <Stats stats={info.stats} color={color} />
      <View style={s.separator} />
      <Chain url={chain} />
    </ScrollView>
  );
});

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  name: {
    fontFamily: 'pokemon',
    letterSpacing: 4,
    color: '#666',
    fontSize: 34,
  },
  chips: {
    flexDirection: 'row',
  },
  separator: {
    marginBottom: 10,
  },
  weight: {
    marginLeft: 0,
  },
  picture: {
    alignItems: 'center',
  },
});
