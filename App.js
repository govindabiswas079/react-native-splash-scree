/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Login } from './screens';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SplashScreen from "react-native-splash-screen";

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: "transparent",
    }
  }

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <View style={{ flex: 1 }}>
        <Login />
      </View>
    </NavigationContainer>
  );
};

export default App;
