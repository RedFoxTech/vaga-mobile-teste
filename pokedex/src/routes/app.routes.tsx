import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './dashboard.routes';
import Landing from '../pages/Landing';
import Details from '../pages/Details';

import colors from '../global/styles/colors';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: `${colors.primary}`,
        },
      }}
    >
      <App.Screen name="Landing" component={Landing} />
      <App.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Pokedex',
        }}
      />
      <App.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
        }}
      />
    </App.Navigator>
  );
};
export default AppRoutes;
