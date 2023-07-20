import { View, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Splash } from './src/screens/Splash';
import { Home } from './src/screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const { Screen, Navigator } = createBottomTabNavigator()

export const App = function () {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigator
          initialRouteName='Home'
          tabBar={(props) => {
            console.log(props)
            return null;
          }}
          screenOptions={{
            headerShown: false,
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