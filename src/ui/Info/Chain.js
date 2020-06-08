import React from 'react';
import {View, Text, TouchableHighlight, Platform, Dimensions, StyleSheet} from 'react-native';
import axios from 'axios';

import Stage from './Stage';
import Evolution from './Evolution';
import Context from 'src/ui/Context';

const screenPadding = 20;
const iconWidth = 40;

export default React.memo(({url}) => {
  const [evolution, evolutionSet] = React.useState(null);
  const [idFirst, idFirstSet] = React.useState(null);
  const [idSecond, idSecondSet] = React.useState(null);
  const [idThird, idThirdSet] = React.useState(null);

  const {screenWidth} = React.useContext(Context);
  const stageWidth = (screenWidth - 2 * screenPadding - 2 * iconWidth) / 3;

  const nameFirst = evolution?.species.name;
  const nameSecond = evolution?.evolves_to?.[0]?.species.name;
  const nameThird = evolution?.evolves_to?.[0]?.evolves_to?.[0]?.species.name;

  React.useEffect(() => {
    if (url) {
      axios.get(url).then(({data: {chain}}) => {
        evolutionSet(chain);
        const second = chain.evolves_to?.[0]?.species.url;
        const third = chain.evolves_to?.[0]?.evolves_to?.[0]?.species.url;
        axios.get(chain.species.url).then(({data}) => idFirstSet(data.id));
        second && axios.get(second).then(({data}) => idSecondSet(data.id));
        third && axios.get(third).then(({data}) => idThirdSet(data.id));
      });
    }
  }, [url]);

  return (
    <View style={s.container}>
      <Stage id={idFirst} name={nameFirst} width={stageWidth} />
      {idSecond && <Evolution id={idSecond} name={nameSecond} width={stageWidth} iconWidth={iconWidth} />}
      {idThird && <Evolution id={idThird} name={nameThird} width={stageWidth} iconWidth={iconWidth} />}
    </View>
  );
});

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
