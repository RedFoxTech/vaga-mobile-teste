import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';
import colors from '../../global/styles/colors';
import api from '../../services/api';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  TypesContainer,
  Type,
  AbilitiesLabel,
  AbilitiesContainer,
  Abilities,
  ExperienceContainer,
  ExperienceText,
  ExperienceValue,
  ButtonsContainer,
  FavoriteButton,
  InfoButton,
  InfoButtonText,
} from './styles';

export interface PokemonProps {
  id: number;
  name: string;
  base_experience: string;
  height: number;
  weight: number;
  avatar: string;
  stats: Array<{
    stat_name: string;
    stat_power: number;
  }>;
  types: Array<string>;
  abilities: Array<string>;
  location_area_encounters: string;
}

interface PokemonItemProps {
  pokemon: PokemonProps;
  favorited: boolean;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon, favorited }) => {
  const { navigate } = useNavigation();

  const [isFavorited, setIsFavorited] = useState(favorited);

  const handleNavigateToDetails = useCallback(async () => {
    navigate('Details', { pokemon, favorited });
  }, [favorited, navigate, pokemon]);

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
      <Profile>
        <Avatar
          source={{
            uri: pokemon.avatar,
          }}
        />

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

      <AbilitiesLabel>Habilidades:</AbilitiesLabel>
      <AbilitiesContainer>
        <Abilities>habilidade um grande</Abilities>
        <Abilities>habilidade dois grande</Abilities>
        <Abilities>habilidade três grande</Abilities>
      </AbilitiesContainer>

      <ButtonsContainer>
        <InfoButton onPress={handleNavigateToDetails}>
          <InfoButtonText>+ Mais informações</InfoButtonText>
        </InfoButton>
      </ButtonsContainer>
    </Container>
  );
};

export default PokemonItem;
