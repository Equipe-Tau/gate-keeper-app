import { View, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface SearchBarProps { }

export const SearchBar = function (props: SearchBarProps) {
  return (
    <View style={styles.container}>
    </View>
  );
}