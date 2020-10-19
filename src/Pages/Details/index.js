import React from 'react';
import {useSelector} from 'react-redux';
import {Card, Title} from 'react-native-paper';

import {Text, Image, TextContainer, TextValue, View} from './styles';

const Details = () => {
  const details = useSelector(state => state.pokemon);

  function formatWeight(weight) {
    const format = weight / 10;
    return `${format} Kg`;
  }

  function formatHeiht(height) {
    const format = height / 10;
    return `${format} M`;
  }

  return (
    <>
      <Card>
        <Card.Content
          style={{
            alignItems: 'center',
          }}>
          <Title>{details.name}</Title>
        </Card.Content>
        <Card.Content
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                details.id
              }.png`,
            }}
          />
          <Title>Tamanho: {formatHeiht(details.height)}</Title>
          <Title> Peso: {formatWeight(details.weight)}</Title>
        </Card.Content>
      </Card>
      <View>
        <TextContainer>
          <Text>
            Formas:{' '}
            <TextValue>{details.forms.map(form => form.name)}</TextValue>
          </Text>
          <Text>
            Tipo:{' '}
            <TextValue>
              {details.types.map(n => n.type.name.replace('', ' | '))}
            </TextValue>
          </Text>
          <Text>
            Habilidades:{' '}
            <TextValue>
              {details.abilities.map(n => n.ability.name.replace('', ' | '))}
            </TextValue>
          </Text>
          <Text>
            Movimentos:
            <TextValue>
              {' '}
              {details.moves.map(n => n.move.name.replace('', ' | '))}
            </TextValue>
          </Text>
        </TextContainer>
      </View>
    </>
  );
};

export default Details;
