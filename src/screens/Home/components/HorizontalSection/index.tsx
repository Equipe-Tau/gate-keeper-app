import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { DoorView } from '../DoorView';
import { Text } from '../../../../components/Text';

const styles = StyleSheet.create({
});

interface HorizontalSectionProps {
  title: string;
}

export const HorizontalSection = function (props: HorizontalSectionProps) {
  return (
    <View style={{
      gap: 10
    }}>
      <Text>
        {props.title}
      </Text>
      <FlatList
        style={{
          width: '100%',
          height: 'auto',
        }}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        data={[0, 0, 0]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <DoorView />;
        }}
      />
    </View>
  );
}