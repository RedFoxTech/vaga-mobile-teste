import styled from 'styled-components/native';

import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
import InfiniteScroll from 'react-native-infinite-scrolling';

import {RectButton} from 'react-native-gesture-handler';
import TextInput from 'react-native-material-textinput';

export const Container = styled.ScrollView`
  flex: 1;
  width: ${width * 1};
  align-self: center;
  z-index: 1;
`;
export const PokemonLis = styled.FlatList`
  width: ${width * 0.9};
  align-self: center;
  margin-top: 10px;
`;

export const ActivityIndicatorC = styled.ActivityIndicator``;
