import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import '~/config/ReactotronConfig';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {SearchProvider} from './Context/Search';

import Routes from '~/routes';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    secondary: 'red',
    accent: 'white',
  },
};

LogBox.ignoreLogs([
  'Encountered two children',
  'Expected style',
  'Each child in a list',
  'Failed child context type',
  'VirtualizedLists should',
  'componentWillReceiveProps',
]);

const App = () => (
  <SearchProvider theme={theme}>
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  </SearchProvider>
);

export default App;
