import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Progress from './Progress';

export default React.memo(({stats, color}) => {
  const names = stats.map(stat => stat.stat.name);
  const values = stats.map(stat => stat.base_stat);
  return (
    <View style={s.container}>
      <View style={s.nameContainer}>
        {names.map(name => (
          <Text style={s.text} key={name}>
            {name.toUpperCase().replace('SPECIAL-', 'SP ')}
          </Text>
        ))}
      </View>

      <View style={s.valueContainer}>
        {values.map((value, index) => (
          <Text style={s.text} key={index}>
            {value}
          </Text>
        ))}
      </View>

      <View style={s.progressContainer}>
        {values.map((value, index) => (
          <Progress style={s.progress} key={index} value={value} color={color} />
        ))}
      </View>
    </View>
  );
});

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  nameContainer: {
    marginRight: 10,
    justifyContent: 'space-between',
  },
  valueContainer: {
    marginRight: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  text: {
    flex: 1,
    paddingVertical: 2,
    textAlignVertical: 'center',
  },
  progressContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  progress: {
    marginVertical: 2,
  },
});
