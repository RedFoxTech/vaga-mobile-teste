import React, {useContext, useState, useEffect} from 'react';

import {Container} from './styles';
import {StatusBar} from 'react-native';

import changeNavigationBarColor from 'react-native-navigation-bar-color';
import SearchContext from '~/Context/Search/';

import Header from './components/Header';
import Pokemons from './components/Pokemons';

const Main = () => {
  const {color} = useContext(SearchContext);
  const [bar, setBar] = useState();

  useEffect(() => {
    if (color == 'white') {
      setBar(true);
    }
    if (color != 'white') {
      setBar(false);
    }
  }, [color]);

  changeNavigationBarColor(
    `${
      color && color == 'red'
        ? '#D42B30'
        : color == 'green'
        ? '#269D77'
        : color == 'blue'
        ? '#1E61A5'
        : color == 'brown'
        ? '#99633D'
        : color == 'purple'
        ? '#711970'
        : color == 'yellow'
        ? '#D2B356'
        : color == 'gray'
        ? '#87898C'
        : color == 'pink'
        ? '#DDB1B0'
        : color == 'white'
        ? '#f3f3f3'
        : color == 'black'
        ? '#323030'
        : '#874CE9'
    }`,
    bar,
  );

  return (
    <Container>
      <StatusBar
        backgroundColor={
          color && color == 'red'
            ? '#D42B30'
            : color == 'green'
            ? '#269D77'
            : color == 'blue'
            ? '#1E61A5'
            : color == 'brown'
            ? '#99633D'
            : color == 'purple'
            ? '#711970'
            : color == 'yellow'
            ? '#D2B356'
            : color == 'gray'
            ? '#87898C'
            : color == 'pink'
            ? '#DDB1B0'
            : color == 'white'
            ? '#f3f3f3'
            : color == 'black'
            ? '#323030'
            : '#874CE9'
        }
        // barStyle="light-content"
        // barStyle="dark-content"
        barStyle={color == 'white' ? 'dark-content' : 'light-content'}
      />

      <Header />
      <Pokemons />
    </Container>
  );
};

export default Main;
