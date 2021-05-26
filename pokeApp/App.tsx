import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar, View } from 'react-native';
import Router from './src/Routes';


const App = () => {
  

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <StatusBar backgroundColor="#E74233" barStyle="light-content" />
      <Router />
    </View>
  );
};

export default App;
