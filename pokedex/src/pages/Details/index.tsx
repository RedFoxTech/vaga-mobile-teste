import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { useRoute } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';
import colors from '../../global/styles/colors';
import PageHeader from '../../components/PageHeader';
import { PokemonProps } from '../../components/PokemonItem';

import {
  Container,
  Content,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  TypesContainer,
  Type,
  Divider,
  DetailsContainer,
  DetailsLabel,
  DetailsText,
  AbilitiesLabel,
  AbilitiesContainer,
  Abilitiy,
  StatsLabel,
  StatsContainer,
  Stat,
  ExperienceContainer,
  ExperienceText,
  ExperienceValue,
  ButtonsContainer,
  FavoriteButton,
  InfoButton,
  InfoButtonText,
} from './styles';

const Details: React.FC = () => {
  const {
    params: { pokemon, favorited },
  } = useRoute();

  const [isFavorited, setIsFavorited] = useState(favorited);

  const handleToggleFavorite = useCallback(async () => {
    setIsFavorited(!isFavorited);

    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (pokemonItem: PokemonProps) => pokemonItem.id === pokemon.id,
      );

      favoritesArray.splice(favoriteIndex, 1);
    } else {
      favoritesArray.push(pokemon);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }, [isFavorited, pokemon]);

  return (
    <Container>
      <PageHeader title="Charmander" />

      <ScrollView
        style={{ marginTop: -60 }}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Avatar
          source={{
            uri: pokemon.avatar,
          }}
        />

        <Content>
          <Profile>
            <ProfileInfo>
              <Name>{pokemon.name}</Name>
              <TypesContainer>
                <Type>tipo1</Type>
                <Type>tipo2</Type>
                <Type>tipo3</Type>
              </TypesContainer>
            </ProfileInfo>

            <ExperienceContainer>
              <ExperienceValue>99</ExperienceValue>
              <ExperienceText>XP Base</ExperienceText>
            </ExperienceContainer>

            <FavoriteButton
              isFavorited={isFavorited}
              onPress={handleToggleFavorite}
            >
              <MaterialIcon
                name={isFavorited ? 'favorite' : 'favorite-border'}
                size={24}
                color={colors.primaryVariant}
              />
            </FavoriteButton>
          </Profile>

          <Divider />

          <DetailsContainer>
            <DetailsLabel>
              Altura:
              <DetailsText>2,00 m</DetailsText>
            </DetailsLabel>
            <DetailsLabel>
              Peso:
              <DetailsText>200 Kg</DetailsText>
            </DetailsLabel>
          </DetailsContainer>

          <AbilitiesLabel>Habilidades:</AbilitiesLabel>
          <Abilitiy>habilidade 1</Abilitiy>
          <Abilitiy>habilidade 2</Abilitiy>
          <Abilitiy>habilidade 3</Abilitiy>

          <StatsLabel>Stats:</StatsLabel>
          <Stat>Stat1: 45</Stat>
          <Stat>Stat2: 56</Stat>
          <Stat>Stat3: 78</Stat>
          <Stat>Stat4: 45</Stat>
          <Stat>Stat5: 56</Stat>
          <Stat>Stat6: 78</Stat>

          <ButtonsContainer>
            <InfoButton>
              <InfoButtonText>Locais que pode ser encontrado</InfoButtonText>
            </InfoButton>
          </ButtonsContainer>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Details;
