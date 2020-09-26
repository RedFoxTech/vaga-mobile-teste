import React, { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { RouteProp, useRoute } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Alert, ScrollView } from 'react-native';
import api from '../../services/api';
import colors from '../../global/styles/colors';
import PageHeader from '../../components/PageHeader';

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
  Abilitiy,
  StatsLabel,
  Stat,
  ExperienceContainer,
  ExperienceText,
  ExperienceValue,
  ButtonsContainer,
  FavoriteButton,
  InfoButton,
  InfoButtonText,
} from './styles';

interface ParamsProps {
  id: number;
  favorited: boolean;
}

interface PokemonDetailedResponse {
  id: number;
  name: string;
  base_experience: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  location_area_encounters: string;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  types: Array<{
    type: {
      name: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
    };
  }>;
}

export interface PokemonDetailedProps {
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

const Details: React.FC = () => {
  const { params } = useRoute<
    RouteProp<Record<string, ParamsProps | undefined>, string>
  >();
  const [pokemon, setPokemon] = useState<PokemonDetailedProps>();
  const [isFavorited, setIsFavorited] = useState(params?.favorited || false);

  useEffect(() => {
    async function loadPokemons() {
      try {
        const { data } = await api.get<PokemonDetailedResponse>(
          `/pokemon/${params?.id}`,
        );

        const pokemonFormatted = {
          id: data.id,
          name: data.name,
          base_experience: data.base_experience,
          height: data.height,
          weight: data.weight,
          avatar: data.sprites.other['official-artwork'].front_default,
          stats: data.stats.map((pokeStat) => ({
            stat_name: pokeStat.stat.name,
            stat_power: pokeStat.base_stat,
          })),
          types: data.types.map((pokeType) => pokeType.type.name),
          abilities: data.abilities.map(
            (pokeAbility) => pokeAbility.ability.name,
          ),
          location_area_encounters: data.location_area_encounters,
        };

        setPokemon(pokemonFormatted);
      } catch (err) {
        Alert.alert('Oops, ocorreu um erro...', 'Verifique sua conexão');
      }
    }

    loadPokemons();
  }, [params?.id]);

  const handleToggleFavorite = useCallback(async () => {
    setIsFavorited(!isFavorited);

    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (pokemonItem: PokemonDetailedProps) => pokemonItem.id === pokemon?.id,
      );

      favoritesArray.splice(favoriteIndex, 1);
    } else {
      favoritesArray.push(pokemon);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }, [isFavorited, pokemon]);

  return (
    <Container>
      {pokemon && (
        <>
          <PageHeader title={pokemon.name} />

          <ScrollView
            style={{ marginTop: -54 }}
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
                    {pokemon.types.map((type) => (
                      <Type key={type}>{type}</Type>
                    ))}
                  </TypesContainer>
                </ProfileInfo>

                <ExperienceContainer>
                  <ExperienceValue>{pokemon.base_experience}</ExperienceValue>
                  <ExperienceText>XP Base</ExperienceText>
                </ExperienceContainer>
              </Profile>

              <FavoriteButton
                isFavorited={isFavorited}
                onPress={handleToggleFavorite}
              >
                <MaterialIcon
                  name={isFavorited ? 'favorite' : 'favorite-border'}
                  size={32}
                  color={colors.primaryVariant}
                />
              </FavoriteButton>

              <Divider />

              <DetailsContainer>
                <DetailsLabel>
                  Altura: <DetailsText>{pokemon.height} m</DetailsText>
                </DetailsLabel>
                <DetailsLabel>
                  Peso: <DetailsText>{pokemon.weight} Kg</DetailsText>
                </DetailsLabel>
              </DetailsContainer>

              <AbilitiesLabel>Habilidades:</AbilitiesLabel>
              {pokemon.abilities.map((ability) => (
                <Abilitiy key={ability}>{ability}</Abilitiy>
              ))}

              <Divider />

              <StatsLabel>Stats:</StatsLabel>
              {pokemon.stats.map((stat) => (
                <Stat key={stat.stat_name}>
                  {stat.stat_name}: {stat.stat_power}
                </Stat>
              ))}

              <ButtonsContainer>
                <InfoButton>
                  <InfoButtonText>
                    Locais que pode ser encontrado
                  </InfoButtonText>
                </InfoButton>
              </ButtonsContainer>
            </Content>
          </ScrollView>
        </>
      )}
    </Container>
  );
};

export default Details;
