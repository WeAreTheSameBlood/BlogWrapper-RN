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

  export const Spacer = () => {
    return(
      <View style={{flex: 1}}>
      </View>
    )
  }

const styles = StyleSheet.create({
  hStack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vStack: {
    flexDirection: 'column',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

