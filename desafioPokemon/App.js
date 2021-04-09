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

const Stack = createStackNavigator();

class App extends Component {
	render() {
		return (
			<>
			<StatusBar/>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" headerMode="none">
			        	<Stack.Screen name="Home" component={List} />
			        </Stack.Navigator>
			</NavigationContainer>
			</>
		);	
	}
}

export default App;
