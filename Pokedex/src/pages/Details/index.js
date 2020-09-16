import React from 'react';
import { View } from 'react-native';

import {
  Container,
  DetailContainer,
  Image,
  TextName,
  TextDetail,
  InformationsContainer
} from './styles';

import Header from '../../components/Header';

function Details({route}) {
  const data = route.params.item;
  const height = data.height * 10;
  const weight = data.weight / 10;

  return (
    <>
      <Header name="Informações" back={true} />
      <Container>
        <DetailContainer>
          <Image
            source={
              data.imageUrl
                ? {uri: data.imageUrl}
                : {uri: data.sprites.front_default}
            }
          />
          <TextDetail>Nome:</TextDetail>
          <TextName>{data.name}</TextName>
          <InformationsContainer>
            <InformationsContainer style={{flexDirection: 'column'}}>
              <TextDetail>Altura:</TextDetail>
              <TextName>{height} cm</TextName>
            </InformationsContainer>
            <InformationsContainer style={{flexDirection: 'column'}}>
              <TextDetail>Peso:</TextDetail>
              <TextName>{weight} kg</TextName>
            </InformationsContainer>
          </InformationsContainer>
          <TextDetail>Tipo:</TextDetail>
          {data.types.map((type) => {
            return <TextName>{type.type.name}</TextName>;
          })}
        </DetailContainer>
      </Container>
    </>
  );
}

export default Details;
