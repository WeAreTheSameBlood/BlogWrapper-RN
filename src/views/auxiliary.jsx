import React from 'react';
import { View, StyleSheet } from 'react-native';

export const HStack = ({ children }) => {
  return (
        <View style={styles.hStack}>
            {children}
        </View>
  )
};

export const VStack = ({ children }) => {
    return (
        <View style={styles.vStack}>
            {children}
        </View>
    )
  };

const styles = StyleSheet.create({
  hStack: {
    // flexDirection: 'row',
  },
  vStack: {
    // flexDirection: 'column',
  },
});

