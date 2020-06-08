import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default React.memo(({text, color, style}) => {
  return <Text style={[s.chip, {backgroundColor: color}, style]}>{text.toUpperCase()}</Text>;
});

const s = StyleSheet.create({
  chip: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
    backgroundColor: '#ddd',
    borderRadius: 50,
    color: 'white',
    textShadowColor: 'black',
    textShadowRadius: 1,
  },
});
