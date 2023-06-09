import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ButtonBar = ({activeTab, tabs, onTabPress}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingBottom: insets.bottom}]}>
          {tabs.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.tabButton, activeTab === index && styles.activeTabButton]}
              onPress={() => {onTabPress(index)}}
            >
              <Text style={styles.tabButtonText}>{tab}</Text>
            </TouchableOpacity>
        ))}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#385c41',
      },
      tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#385c41',
        borderRadius: 10,
        
      },
      activeTabButton: {
        backgroundColor: '#68876a',
      },
      tabButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
    });