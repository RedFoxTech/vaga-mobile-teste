import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {navigationRef} from './Navigation';
import ListSearch from './List/ListSearch';
import List from './List/List';
import Info from './Info/Info';

const transitionSpec = {animation: 'spring', config: {stiffness: 100, overshootClamping: true}};

let screenOptions = {
  transitionSpec: {open: transitionSpec, close: transitionSpec},
  headerTitleAlign: 'left',
};
Platform.OS !== 'web' && (screenOptions = {...screenOptions, ...TransitionPresets.SlideFromRightIOS});

const optScreen = {animationEnabled: true};

const optList = {...optScreen, headerTitle: props => <ListSearch {...props} />};
const optInfo = {...optScreen, title: 'loading pokemon...'};

const Stack = createStackNavigator();

export default React.memo(() => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator headerMode={Platform.OS === 'web' ? 'float' : 'screen'} screenOptions={screenOptions}>
      <Stack.Screen name="List" component={List} options={optList} />
      <Stack.Screen name="Info" component={Info} options={optInfo} initialParams={{id: 25}} />
    </Stack.Navigator>
  </NavigationContainer>
));
