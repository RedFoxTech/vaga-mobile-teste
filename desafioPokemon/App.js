import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import List from './src/Components/List.js'

export default function App () {
	return (
		<>
		<StatusBar/>
		<SafeAreaView>
			<List/>
		</SafeAreaView>
		</>
	)	
}
