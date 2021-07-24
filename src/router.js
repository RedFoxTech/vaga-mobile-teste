import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen } from './screens/home'
import { DetailsScreen } from './screens/details'
import { SearchScreen } from './screens/search'


const StackHome = createStackNavigator()
const HomeStack = () => (
  <StackHome.Navigator initialRouteName="Home" >
    <StackHome.Screen 
      name="Home"  
      component={HomeScreen} 
      options={{
        headerStyle: {
          backgroundColor: '#F00'
        },
        headerTitleStyle: {
          color: "#fff"
        }
      }}
    />
    <StackHome.Screen 
      name="Details" 
      component={DetailsScreen} 
      options={() => ({ 
        headerTransparent: true,
        headerTitle: "",
        headerBackImage: ({ tintColor, size }) => (
          <Icon name="close" size={25} color={tintColor} />
        )
      })}
    />
  </StackHome.Navigator>
)

const StackSearch = createStackNavigator()
const SearchStack = () => (
  <StackSearch.Navigator initialRouteName="Home">
    <StackSearch.Screen 
      name="Search"  
      component={SearchScreen} 
      options={{
        headerTransparent: true,
        headerTitle: ""
      }}
    />
    <StackSearch.Screen 
      name="Details" 
      component={DetailsScreen} 
      options={() => ({ 
        headerTransparent: true,
        headerTitle: "",
        headerBackImage: ({ tintColor, size }) => (
          <Icon name="close" size={25} color={tintColor} />
        )
      })}
    />
  </StackSearch.Navigator>
)

const Tab = createBottomTabNavigator()
const Router = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: "#f00",
            },
            showLabel: false
          }}
          initialRouteName="Home"
        >
          <Tab.Screen 
            name="Home" 
            component={HomeStack}
            options={({ navigation, route }) => ({
              tabBarIcon: ({ color, size, focused }) => (
                <Icon name="home" color={"#fff"} size={focused? size*1.5:size} />
              ),
              tabBarVisible: getFocusedRouteNameFromRoute(route) == 'Details'? false : true
            })}
          />
          <Tab.Screen 
            name="Search" 
            component={SearchStack}
            options={({ navigation, route }) => ({
              tabBarIcon: ({ color, size, focused }) => (
                <Icon name="search" color={"#fff"} size={focused? size*1.5:size} />
              ),
              tabBarVisible: getFocusedRouteNameFromRoute(route) == 'Details'? false : true
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
  )
}

export default Router