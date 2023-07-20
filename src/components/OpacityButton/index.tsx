import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text } from '../Text';
import { colors } from '../../utils/theme';



interface OpacityButtonProps {
  title: string;
  backgroundColor?: string;
}

export const OpacityButton = function (props: OpacityButtonProps) {

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 8,
      paddingHorizontal: 10,
      backgroundColor: props.backgroundColor ?? colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
  });

  return (
    <TouchableOpacity
      activeOpacity={.7}
    >
      <View style={styles.container}>
        <Text>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>

  );
}