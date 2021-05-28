import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/home';
import PokemonDetails from '../pages/pokemonDetails';
import Profile from '../pages/profile';

const Route = createStackNavigator();

export const horizontalAnimation = {
  cardStyleInterpolator: ({current, layouts}: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const Routes = () => (
  <Route.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Route.Screen name="Home" component={Home} />
    <Route.Screen name="PokemonDetails" component={PokemonDetails} />
    <Route.Screen
      name="Profile"
      component={Profile}
      options={horizontalAnimation}
    />
  </Route.Navigator>
);

export default Routes;
