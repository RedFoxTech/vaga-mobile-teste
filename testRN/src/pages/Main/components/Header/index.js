import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {Container, Title} from './styles';
import SearchContext from '~/Context/Search/';

import Filter from './components/Filter';

const Header = () => {
  const {color} = useContext(SearchContext);
  return (
    <Container background={color}>
      {/* <Title>Minha Pokéfox</Title> */}
      {/* <Text>{color}</Text> */}
      <Filter />
    </Container>
  );
};

export default Header;
