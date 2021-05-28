import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from './hooks/context';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0)"
        translucent
      />
      <NavigationContainer>
        <Provider>
          <Routes />
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
