import { StyleSheet } from 'react-native';
import React from 'react';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Text } from '../../components/Text';
import { fonts } from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface HomeProps { }

export const Home = function (props: HomeProps) {
  return (
    <Background style={{

    }}>
      <Header
        center={
          <Text size={1.1} fontFamily={fonts.montserrat.default}>
            Home
          </Text>
        }
      />

    </Background>
  );
}