import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {Image, Text} from './styles';
import {Button, Card, Title, Paragraph} from 'react-native-paper';

import api from '../../services/api';

const PokemonCard = ({data, onPress}) => {
  const [urlDetails, setUrlDetails] = useState([]);

  const dispath = useDispatch();

  useEffect(() => {
    async function loadDetails() {
      await api
        .get(`${data.url}`)
        .then(response => setUrlDetails(response.data));
    }
    loadDetails();
  }, [data.url]);

  function formatWeight(weight) {
    const format = weight / 10;
    return `${format} Kg`;
  }

  function formatHeight(height) {
    const format = height / 10;
    return `${format} M`;
  }

  return (
    <Card
      style={{
        borderWidth: 1,
        marginTop: 5,
      }}>
      <Card.Content
        style={{
          alignItems: 'center',
        }}>
        <Title>{urlDetails.name}</Title>
      </Card.Content>
      <Card.Content
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              urlDetails.id
            }.png`,
          }}
        />
      </Card.Content>

      <Card.Actions
        style={{
          flexDirection: 'column',
        }}>
        <Paragraph>
          {' '}
          <Text>Weight:</Text>
          {formatWeight(urlDetails.weight)}
        </Paragraph>

        <Paragraph>
          {' '}
          <Text>Height:</Text>
          {formatHeight(urlDetails.height)}
        </Paragraph>
      </Card.Actions>

      <Button
        onPress={() =>
          onPress(dispath({type: 'GET_POKEMON', infos: urlDetails}))
        }
        mode="contained"
        style={{
          backgroundColor: '#ff0000',
        }}>
        Detalhes
      </Button>
    </Card>
  );
};

export default PokemonCard;

/*
<Pokemon
      onPress={() =>
        onPress(dispath({type: 'GET_POKEMON', infos: urlDetails}))
      }>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            urlDetails.id
          }.png`,
        }}
      />
      <ContainerDetail>
        <Info>
          <Text>Nome:</Text> {data.name}
        </Info>
        <Info>
          <Text>Altura:</Text> {formatHeiht(urlDetails.height)}
        </Info>
        <Info>
          <Text>Peso:</Text> {formatWeight(urlDetails.weight)}
        </Info>
        </ContainerDetail>
        </Pokemon>
*/
