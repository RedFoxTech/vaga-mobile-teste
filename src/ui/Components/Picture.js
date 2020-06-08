import React from 'react';
import {View, Image, StyleSheet, ActivityIndicator, Platform} from 'react-native';

export default React.memo(({id, style}) => {
  if (!id) return null;

  const [uri, uriSet] = React.useState({uri: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`});
  const [loading, loadingSet] = React.useState(true);

  const onLoad = () => loadingSet(false);

  const onError = ({nativeEvent: {error}}) => {
    if (uri.uri.includes('github')) {
      uriSet(require('src/assets/images/question.png'));
      return onLoad();
    }
    uriSet({uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`});
    Platform.OS === 'web' && onLoad(); // react-native-web bug: onLoad not fired for cached images
  };

  return (
    <View style={style}>
      <Image style={style} source={uri} onError={onError} onLoad={onLoad} resizeMode="contain" />
      {loading && (
        <View style={s.spinner}>
          <ActivityIndicator size={style.width / 2} color="gray" />
        </View>
      )}
    </View>
  );
});

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
