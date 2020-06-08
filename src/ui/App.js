require('react-native-screens').enableScreens();

import 'react-native-gesture-handler';
import React from 'react';
import {Platform, Dimensions, View} from 'react-native';
import {useFonts} from '@use-expo/font';
import * as ScreenOrientation from 'expo-screen-orientation';

import Main from './Main';
import Context from './Context';

const web = Platform.OS === 'web';

export default React.memo(() => {
  const [fontsLoaded] = useFonts({pokemon: require('src/assets/fonts/pokemon.ttf')});
  const [sort, sortSet] = React.useState(false);
  const [search, searchSet] = React.useState('');

  const context = {
    screenWidth: web ? 700 : Dimensions.get('window').width,
    sort,
    sortToggle: () => sortSet(!sort),
    search,
    searchSet: value => searchSet(value),
  };

  const style = {
    flex: 1,
    maxWidth: context.screenWidth,
    borderRightWidth: web ? 1 : 0,
    borderColor: '#ddd',
  };

  !web && ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

  return !fontsLoaded ? null : (
    <Context.Provider value={context}>
      <View style={style}>
        <Main />
      </View>
    </Context.Provider>
  );
});
