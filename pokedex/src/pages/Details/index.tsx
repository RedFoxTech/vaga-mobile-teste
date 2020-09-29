import React, { useState, useCallback, useEffect } from 'react';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Alert, ScrollView } from 'react-native';
import LocationsModal from '../../components/LocationsModal';
import { usePokemons } from '../../hooks/pokemons';
import api from '../../services/api';
import colors from '../../global/styles/colors';
import PageHeader from '../../components/PageHeader';

import {
  Container,
  Content,
  Profile,
  Avatar,
  EmptyAvatar,
  ProfileInfo,
  Name,
  TypesContainer,
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
import PokemonType from '../../components/PokemonType';

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
  favorited: boolean;
  location_area_encounters: string;
}

interface LocationsResponse {
  location_area: {
    name: string;
  };
}

interface ParamsProps {
  id: number;
}

const Details: React.FC = () => {
  const { goBack } = useNavigation();

  const { favoritesId, toggleFavorite } = usePokemons();

  const { params: routeParams } = useRoute<
    RouteProp<Record<string, ParamsProps | undefined>, string>
  >();
  const [pokemon, setPokemon] = useState<PokemonDetailedProps>(
    {} as PokemonDetailedProps,
  );
  const [locations, setLocations] = useState<string[]>([]);
  const [locationsModalVisible, setLocationsModalVisible] = useState(false);

  useEffect(() => {
    async function loadPokemons() {
      try {
        const { data } = await api.get<PokemonDetailedResponse>(
          `/pokemon/${routeParams?.id}`,
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
          favorited: favoritesId.includes(data.id),
          location_area_encounters: data.location_area_encounters,
        };

        setPokemon(pokemonFormatted);
      } catch (err) {
        Alert.alert('Oops, ocorreu um erro...', 'Verifique sua conexão');
      }
    }

    loadPokemons();
  }, [favoritesId, routeParams?.id]);

  const handleToggleFavorite = useCallback(async () => {
    if (pokemon) {
      toggleFavorite(pokemon.id);

      setPokemon({ ...pokemon, favorited: !pokemon.favorited });
    }
  }, [pokemon, toggleFavorite]);

  const handleLocations = useCallback(async () => {
    const response = await api.get<LocationsResponse[]>(
      `/pokemon/${pokemon?.name}/encounters`,
    );

    const locationNames = response.data.map(
      (location) => location.location_area.name,
    );

    setLocations(locationNames);
    setLocationsModalVisible(true);
  }, [pokemon?.name]);

  return (
    <Container>
      {!!pokemon.id && (
        <>
          <PageHeader
            title={pokemon.name}
            hasFilter={false}
            onPressLeftButton={goBack}
          />

          <ScrollView
            style={{ marginTop: -54 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}
          >
            {(pokemon.avatar && (
              <Avatar
                source={{
                  uri: pokemon.avatar,
                }}
              />
            )) || <EmptyAvatar />}

            <Content>
              <Profile>
                <ProfileInfo>
                  <Name>{pokemon.name}</Name>
                  <TypesContainer>
                    {pokemon.types.map((type) => (
                      <PokemonType key={type} type={type}>
                        {type}
                      </PokemonType>
                    ))}
                  </TypesContainer>
                </ProfileInfo>

                <ExperienceContainer>
                  <ExperienceValue>{pokemon.base_experience}</ExperienceValue>
                  <ExperienceText>XP Base</ExperienceText>
                </ExperienceContainer>
              </Profile>

              <FavoriteButton onPress={handleToggleFavorite}>
                <MaterialIcon
                  name={pokemon.favorited ? 'favorite' : 'favorite-border'}
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

              <StatsLabel>Estatísticas:</StatsLabel>
              {pokemon.stats.map((stat) => (
                <Stat key={stat.stat_name}>
                  {stat.stat_name}: {stat.stat_power}
                </Stat>
              ))}

              <ButtonsContainer>
                <InfoButton onPress={handleLocations}>
                  <InfoButtonText>
                    Locais que pode ser encontrado
                  </InfoButtonText>
                </InfoButton>
              </ButtonsContainer>
            </Content>
          </ScrollView>
          <LocationsModal
            visible={locationsModalVisible}
            closeModal={() => setLocationsModalVisible(false)}
            pokemon={pokemon}
            locations={locations}
          />
        </>
      )}
    </Container>
  );
};

export default Details;
