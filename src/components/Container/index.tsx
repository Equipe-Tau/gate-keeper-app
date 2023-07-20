import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React from 'react';



interface ContainerProps {
  children: React.ReactNode,
  style?: StyleProp<ViewStyle>,
  flex?: number,
}

export const Container = function (props: ContainerProps) {

  const styles = StyleSheet.create({
    container: {
      flex: props.flex ?? 1,
    },
  });

  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
}