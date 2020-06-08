import React from 'react';
import {View, StyleSheet, FlatList, Keyboard, ActivityIndicator} from 'react-native';
import axios from 'axios';

import Context from 'src/ui/Context';
import Item from './Item';

const refList = React.createRef();
const listPadding = 10;
const itemMargin = 10;
const cols = 3;

export default React.memo(({route, navigation: {navigate}}) => {
  const [raw, rawSet] = React.useState(null);
  const [sorted, sortedSet] = React.useState(null);
  React.useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=9999').then(({data: {results}}) => {
      rawSet(results);
      sortedSet([...results].sort(({name: a}, {name: b}) => (a < b ? -1 : a > b ? 1 : 0)));
    });
  }, []);

  const {search, sort, screenWidth} = React.useContext(Context);

  React.useEffect(() => refList.current?.scrollToOffset({animated: false, offset: 0}), [search, sort]);

  const imageWidth = (screenWidth - 2 * listPadding - 2 * itemMargin * cols) / cols; // Image from web needs dimensions

  const list = (sort ? sorted : raw) ?? [];
  const filtered = list.filter(poke => poke.name.toUpperCase().includes(search.toUpperCase()));

  const emptyItems = filtered.length % cols && cols - (filtered.length % cols);
  for (let i = emptyItems; i; i--) filtered.push({empty: true}); // flatlist empty tiles

  const renderItem = ({item}) => <Item item={item} navigate={navigate} width={imageWidth} margin={itemMargin} />;

  const keyExtractor = item => item.name;

  return !list ? (
    <ActivityIndicator style={s.spinner} size={screenWidth / 4} color="gray" />
  ) : (
    <View style={s.container}>
      <FlatList
        data={filtered}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={cols}
        contentContainerStyle={s.list}
        ref={refList}
        onScroll={Keyboard.dismiss}
        windowSize={10}
      />
    </View>
  );
});

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    padding: listPadding,
  },
  spinner: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
