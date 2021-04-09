import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createAppContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import List from './src/Components/List.js'
import Details from './src/Components/Details.js'

const Stack = createStackNavigator();

class App extends Component {
	render() {
		return (
			<>
			<StatusBar/>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" headerMode="none">
			        	<Stack.Screen name="Home" component={List} />
			        	<Stack.Screen name="Details" component={Details} />
			        </Stack.Navigator>
			</NavigationContainer>
			</>
		);	
	}
}

export default App;
