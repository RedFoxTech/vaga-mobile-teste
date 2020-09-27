import React, { useCallback } from 'react';
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
import PokemonType from '../PokemonType';

export interface PokemonBasicProps {
  id: number;
  name: string;
  base_experience: string;
  avatar: string;
  types: Array<
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'fire'
    | 'water'
    | 'grass'
    | 'electric'
    | 'psychic'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'fairy'
    | 'unknown'
    | 'shadow'
  >;
  abilities: Array<string>;
  favorited: boolean;
}

interface PokemonItemProps {
  pokemon: PokemonBasicProps;
  favorited: boolean;
  toggleFavorite(): void;
}

const PokemonItem: React.FC<PokemonItemProps> = ({
  pokemon,
  favorited,
  toggleFavorite,
}) => {
  const { navigate } = useNavigation();

  const handleNavigateToDetails = useCallback(async () => {
    navigate('Details', { id: pokemon.id });
  }, [navigate, pokemon]);

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

        <FavoriteButton onPress={toggleFavorite}>
          <MaterialIcon
            name={favorited ? 'favorite' : 'favorite-border'}
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
