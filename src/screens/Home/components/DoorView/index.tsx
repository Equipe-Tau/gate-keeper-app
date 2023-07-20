import { View, StyleSheet, Image } from 'react-native';
import React from 'react';
import { screenWidth } from '../../../../utils/screen';
import { colors, fonts } from '../../../../utils/theme';
import { Container } from '../../../../components/Container';
import { Text } from '../../../../components/Text';
import { OpacityButton } from '../../../../components/OpacityButton';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 280,
    width: screenWidth / 2.1,
    borderRadius: 5,
    borderColor: colors.gray.light,
    borderWidth: 1,
  },
});

interface DoorViewProps { }

export const DoorView = function (props: DoorViewProps) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '45%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            width: '90%',
            height: '100%',
            borderRadius: 5,
          }}
          source={require('../../../../assets/images/hotel.jpg')}
        />
      </View>
      <Container>
        <Text
          fontFamily={fonts.montserrat.bold}
          style={{
            textAlign: 'center',
          }}>
          Chave 308
        </Text>
        <Text size={.7} color={colors.gray.light}>
          Laboratório de Informática
        </Text>
        <Text size={.7} color={colors.gray.light}>
          IFMG - ITABIRITO
        </Text>
      </Container>
      <View style={{ gap: 3 }}>
        <View style={{ flexDirection: 'row', gap: 1 }}>
          <Text size={.7}>
            Status:
          </Text>
          <Text color={colors.safe} size={.7}
          >
            Disponível
          </Text>
        </View>

        <OpacityButton
          title='VER'
        />
      </View>
    </View >
  );
}