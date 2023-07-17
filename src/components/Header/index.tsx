import { View, StyleSheet, StatusBar } from 'react-native';
import React from 'react';
import { colors } from '../../utils/theme';
import { Container } from '../Container';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
});

interface HeaderProps {
  right?: React.ReactNode;
  left?: React.ReactNode;
  center?: React.ReactNode;
}

export const Header = function (props: HeaderProps) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.secondary}
        barStyle='light-content'
      />

      <Container>
        {props.left}
      </Container>
      <Container style={{
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {props.center}
      </Container>
      <Container>
        {props.right}
      </Container>
    </View>
  );
}