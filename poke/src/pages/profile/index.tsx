import React from 'react';
import {FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pokemon from '../../components/pokemonCard';
import {useNavigation} from '@react-navigation/native';

import {useFavorite} from '../../hooks/context';

import {
  Container,
  Avatar,
  AvatarContent,
  Header,
  ButtonChangeProfile,
  IdUserView,
  IdTextUser,
  FavoriteView,
  FavoriteText,
  FavoriteContent,
  ButtonBack,
} from './styles';

const Profile: React.FC = () => {
  const {favourites} = useFavorite();

  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <AvatarContent>
          <Avatar
            resizeMode="cover"
            source={{
              uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
            }}
          />
          <ButtonChangeProfile>
            <Icon name="camera" size={25} color="#151e2b" />
          </ButtonChangeProfile>
        </AvatarContent>
        <IdUserView>
          <IdTextUser>#1052</IdTextUser>
        </IdUserView>
      </Header>
      <FavoriteView>
        <FavoriteText>Favorite Pokémons</FavoriteText>
        <FavoriteContent>
          <FlatList
            data={favourites}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <Pokemon pokeName={item.name} cardFavorite />
            )}
          />
        </FavoriteContent>
      </FavoriteView>
      <ButtonBack onPress={() => navigation.goBack()}>
        <Icon name="long-arrow-left" size={50} color="#151e2b" />
      </ButtonBack>
    </Container>
  );
};

export default Profile;
