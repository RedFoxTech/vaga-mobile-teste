import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Stage from './Stage';

export default React.memo(({id, name, width, iconWidth}) => (
  <>
    <View style={[s.container, {width: iconWidth}]}>
      <Icon name="arrow-forward" size={20} />
    </View>
    <Stage id={id} name={name} width={width} />
  </>
));

const s = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
