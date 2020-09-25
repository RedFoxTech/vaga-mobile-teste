import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import PokemonList from '../pages/PokemonList';
import Favorites from '../pages/Favorites';
import colors from '../global/styles/colors';
import fonts from '../global/styles/fonts';

const Dashboard = createBottomTabNavigator();

const StudyTabs: React.FC = () => {
  return (
    <Dashboard.Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          borderTopWidth: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        safeAreaInsets: {
          bottom: 0,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: `${fonts.RobotoBold}`,
          fontSize: 16,
          marginLeft: 16,
        },
        inactiveBackgroundColor: `${colors.primary}`,
        activeBackgroundColor: `${colors.primaryVariant}`,
        inactiveTintColor: '#fff',
        activeTintColor: '#fff',
      }}
    >
      <Dashboard.Screen
        name="PokemonList"
        component={PokemonList}
        options={{
          tabBarLabel: 'Pokemons',
          tabBarIcon: ({ color, size, focused }) => (
            <FeatherIcon
              name="gitlab"
              size={size}
              color={focused ? `${colors.red}` : color}
            />
          ),
        }}
      />
      <Dashboard.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          unmountOnBlur: true,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicon
              name="heart-outline"
              size={size}
              color={focused ? `${colors.red}` : color}
            />
          ),
        }}
      />
    </Dashboard.Navigator>
  );
};

export default StudyTabs;
