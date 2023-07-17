import { StyleSheet, Text as NativeText, TextStyle, StyleProp, Dimensions, useWindowDimensions } from 'react-native';
import React from 'react';
import { colors } from '../../utils/theme';



interface TextProps {
  size?: number,
  style?: StyleProp<TextStyle>,
  bold?: boolean,
  fontFamily?: string,
  children: React.ReactNode,
}


export const Text = function (props: TextProps) {

  const { height: screenHeight } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      color: colors.white.principal,
      fontSize: screenHeight * 0.02 * (props.size || 1),
      fontWeight: props.bold ? 'bold' : 'normal',
      fontFamily: props.fontFamily || 'Roboto',
    },
  });

  return (
    <NativeText style={[
      styles.container,
      props.style
    ]}>
      {props.children}
    </NativeText>
  );
}