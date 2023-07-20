import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Text } from '../../components/Text';
import { fonts } from '../../utils/theme';
import { SearchBar } from './components/SearchBar';
import { DoorView } from './components/DoorView';
import { HorizontalSection } from './components/HorizontalSection';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface HomeProps { }

export const Home = function (props: HomeProps) {
  return (
    <Background
      //gap={10}
      header={
        <Header
          center={
            <Text size={1.1} fontFamily={fonts.montserrat.default}>
              Home
            </Text>
          }
        />}
    >
      <ScrollView
        style={{
          paddingTop: 10,
          paddingHorizontal: 10,
        }}>

        <SearchBar />

        <HorizontalSection
          title='Chaves que você tem permissão'
        />

        <HorizontalSection
          title='Outras chaves de sua organização'
        />
      </ScrollView>

    </Background>
  );
}