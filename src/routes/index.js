import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Dashboard from '../Pages/Dashboard';
import Details from '../Pages/Details';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pokedéx">
        <Stack.Screen
          name="Pokedéx"
          component={Dashboard}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Details}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#ff0000',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
