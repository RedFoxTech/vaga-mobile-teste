import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';

export default React.memo(({value, style, color}) => {
  const animated = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => Animated.timing(animated, {toValue: 1, duration: 1000}).start(), []);
  const interpolate = animated.interpolate({inputRange: [0, 1], outputRange: ['0%', `${(100 * value) / 255}%`]});
  return (
    <View style={[s.back, style]}>
      <Animated.View style={[s.front, {backgroundColor: color, width: interpolate}]} />
    </View>
  );
});

const s = StyleSheet.create({
  back: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#f3f3f3',
  },
  front: {
    borderRadius: 5,
    height: 20,
  },
});
