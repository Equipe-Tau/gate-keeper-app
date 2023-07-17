import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface ContainerProps {
  children: React.ReactNode,
  style?: StyleProp<ViewStyle>
}

export const Container = function (props: ContainerProps) {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
}