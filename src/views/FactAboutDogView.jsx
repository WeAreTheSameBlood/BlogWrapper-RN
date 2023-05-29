import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { VStack } from "./auxiliary"

export const FactAboutDogView = ({fact, onRemove}) => {


    const press = () => {
        console.log(fact)
      }

    return(
        <TouchableOpacity 
        activeOpacity={1/3}
        onPress={press}
        onLongPress={() => onRemove(fact.id)}
        >
        <VStack>
            <View style={styles.factView}>
                <Text style={styles.titleText}>{fact.title} </Text>
                <Text style={styles.factText}>{fact.text}</Text>
            </View>
        </VStack>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    factView: {
        alignItems: 'flex-start',
        padding: 10,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'white',
        opacity: 3/4
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    factText: {
        fontSize: 16
    }
})