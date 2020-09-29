import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import AppProvider from './hooks';
import AppRoutes from './routes/app.routes';
import colors from './global/styles/colors';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryVariant}
      />
      <AppProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: `${colors.primary}` }}>
          <AppRoutes />
        </SafeAreaView>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
