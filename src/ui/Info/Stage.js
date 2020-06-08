import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Picture from 'src/ui/Components/Picture';

const capitalize = (string = '') => string.charAt(0).toUpperCase() + string.slice(1);

export default React.memo(({id, name, width}) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight onPress={() => navigation.push('Info', {id})}>
      <View>
        <Picture id={id} style={{width, height: width}} />
        <Text style={s.name}>{capitalize(name)}</Text>
      </View>
    </TouchableHighlight>
  );
});

const s = StyleSheet.create({
  name: {
    flex: 1,
    textAlign: 'center',
    marginTop: 5,
  },
});
