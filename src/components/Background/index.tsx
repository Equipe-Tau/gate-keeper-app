import { View, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import React from 'react';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
});

interface BackgroundProps {
  children: React.ReactNode,
  header?: React.ReactNode,
  gap?: number,
  style?: StyleProp<ViewStyle>
}

export const Background = function (props: BackgroundProps) {
  return (
    <View style={[styles.container, { gap: props.gap }]}>
      {props.header}
      <View style={props.style}>
        {props.children}
      </View>

    </View>
  );
}