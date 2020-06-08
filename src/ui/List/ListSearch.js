import React from 'react';
import {View, TextInput, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {navigate} from 'src/ui/Navigation';
import Context from 'src/ui/Context';

const foreground = '#777';
const background = 'white';

export default React.memo(() => {
  const {search, searchSet, sort, sortToggle} = React.useContext(Context);
  const onClear = () => searchSet('');
  const buttonStyle = [s.button, {backgroundColor: sort ? foreground : background}];
  const sortStyle = [s.sort, {color: sort ? background : foreground}];
  return (
    <View style={s.container}>
      <View style={s.search}>
        <TextInput placeholder="buscar pokemon" style={s.input} value={search} onChangeText={searchSet} />
        {search !== '' && <Icon name="cancel" style={s.clear} size={25} onPress={onClear} />}
      </View>
      <TouchableHighlight style={buttonStyle} onPress={sortToggle}>
        <Icon name="sort-by-alpha" style={sortStyle} size={25} />
      </TouchableHighlight>
    </View>
  );
});

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
    paddingVertical: 5,
    paddingLeft: 20,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    color: foreground,
  },
  clear: {
    color: foreground,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  sort: {
    color: foreground,
  },
});
