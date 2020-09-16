import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home/index';
import Details from './pages/Details';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default Routes;
