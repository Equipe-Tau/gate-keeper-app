import { View, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from './src/screens/Splash';
import { Home } from './src/screens/Home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const { Screen, Navigator } = createNativeStackNavigator()

export const App = function () {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false
          }}
        >
          <Screen
            name='Splash'
            component={Splash}
          />

          <Screen
            name='Home'
            component={Home}
          />
        </Navigator>
      </NavigationContainer>
    </View>

  );
}