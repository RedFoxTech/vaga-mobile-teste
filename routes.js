import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Dashboard from './src/Dashboard';
import Detalhes from './src/Detalhes';


export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator  initialRouteName="Dashboard" >
                <AppStack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
                <AppStack.Screen name="Detalhes" component={Detalhes} options={{headerShown: false}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}