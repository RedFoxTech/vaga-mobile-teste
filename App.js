
import React from 'react';
import { AppLoading } from 'expo';
import Routes from './src/routes';
import { StatusBar} from 'react-native';


import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';


export default function App() {


  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#c8b900"  />
    <Routes />
    </>
  );
}