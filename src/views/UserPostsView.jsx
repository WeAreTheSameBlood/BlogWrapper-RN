import { View, StyleSheet, Text } from "react-native"

export const UserPostsView = () => {

    return(
        <View >
            <Text style={styles.textHeader}>My posts</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        textAlign: 'left',
        padding: 5,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        paddingVertical: 10
    }, 
  });