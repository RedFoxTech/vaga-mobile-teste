import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import Picture from 'src/ui/Components/Picture';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export default React.memo(({item, navigate, margin, width}) => {
  if (!item.name) return <View style={s.item} />;
  const id = item.url.split('/').slice(-2)[0];
  return (
    <TouchableHighlight style={[s.item, s.container, {margin}]} onPress={() => navigate('Info', {id})}>
      <View>
        <Picture id={id} style={{width, height: width}} />
        <Text style={s.name} ellipsizeMode="tail" numberOfLines={1}>
          {capitalize(item.name)}
        </Text>
      </View>
    </TouchableHighlight>
  );
});

const s = StyleSheet.create({
  item: {
    flexBasis: 0,
    flexGrow: 1,
    marginBottom: 30,
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  name: {
    textAlign: 'center',
    marginTop: 5,
    color: '#777',
    fontSize: 16,
  },
});
