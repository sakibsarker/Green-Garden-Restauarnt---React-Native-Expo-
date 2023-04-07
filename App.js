import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';


import MainTabNavigator from './src/component/Navigator/Main/MainNav.component';
import { StyleSheet } from 'react-native';


const App = () => {
  return (

    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
});

export default App;














