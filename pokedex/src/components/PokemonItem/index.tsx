import React, { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';
import colors from '../../global/styles/colors';

import {
  Container,
  Profile,
  LeftContainer,
  Avatar,
  ProfileInfo,
  Name,
  TypesContainer,
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
import PokemonType, { PokemonsTypesOptions } from '../PokemonType';

export interface PokemonBasicProps {
  id: number;
  name: string;
  base_experience: string;
  avatar: string;
  types: Array<PokemonsTypesOptions>;
  abilities: Array<string>;
}

interface PokemonItemProps {
  pokemon: PokemonBasicProps;
  favorited: boolean;
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon, favorited }) => {
  const { navigate } = useNavigation();

  const [isFavorited, setIsFavorited] = useState(favorited);

  const handleNavigateToDetails = useCallback(async () => {
    navigate('Details', { id: pokemon.id, favorited });
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
        (pokemonItem: PokemonBasicProps) => pokemonItem.id === pokemon.id,
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
        <LeftContainer>
          <Avatar
            source={{
              uri: pokemon.avatar,
            }}
          />

          <ProfileInfo>
            <Name>{pokemon.name}</Name>
            <TypesContainer>
              {pokemon.types.map((type) => (
                <PokemonType key={String(type)} type={type} />
              ))}
            </TypesContainer>
          </ProfileInfo>
        </LeftContainer>

        <ExperienceContainer>
          <ExperienceValue>{pokemon.base_experience}</ExperienceValue>
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
        {pokemon.abilities.map((ability) => (
          <Abilities key={ability}>{ability}</Abilities>
        ))}
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
