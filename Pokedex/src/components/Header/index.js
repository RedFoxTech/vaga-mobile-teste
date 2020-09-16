import React from 'react';
import {TouchableOpacity} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {useNavigation} from '@react-navigation/native';

import {Container, Icon, Text} from './styles';

import searchIcon from '../../assets/search.png';
import filterIcon from '../../assets/filter.png';
import backIcon from '../../assets/back.png';

function Header({name, renderSearch, renderTypes, back}) {
  const statusBarHeight = getStatusBarHeight();

  const navigation = useNavigation();

  return back === false ? (
    <Container style={{marginTop: statusBarHeight}}>
      <TouchableOpacity onPress={() => renderTypes()}>
        <Icon source={filterIcon} />
      </TouchableOpacity>
      <Text>{name}</Text>
      <TouchableOpacity onPress={() => renderSearch()}>
        <Icon source={searchIcon} />
      </TouchableOpacity>
    </Container>
  ) : (
    <Container style={{marginTop: statusBarHeight}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon source={backIcon} />
      </TouchableOpacity>
      <Text>{name}</Text>
      <TouchableOpacity onPress={() => renderSearch()}>
        <Icon />
      </TouchableOpacity>
    </Container>
  );
}

export default Header;
