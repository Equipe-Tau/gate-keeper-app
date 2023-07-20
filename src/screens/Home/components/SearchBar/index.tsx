import { View, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { MagnifyingGlass } from 'phosphor-react-native';
import { Text } from '../../../../components/Text';
import { colors, fonts } from '../../../../utils/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    gap: 10
  },
});

interface SearchBarProps { }

export const SearchBar = function (props: SearchBarProps) {
  return (
    <View style={styles.container}>
      <MagnifyingGlass size={25} color={colors.primary} />
      <TextInput
        placeholder="Pesquise o nome de uma chave"
        placeholderTextColor={colors.gray.light}
        style={{
          flex: 1,
          color: colors.white.principal,
          fontFamily: fonts.montserrat.default,
        }}
      />
    </View>
  );
}