import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./src/screens/home";
import DetailsPage from "./src/screens/details";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Details" component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
