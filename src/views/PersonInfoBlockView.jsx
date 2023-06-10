import { 
    View, 
    Text,
    StyleSheet, 
} from "react-native"
import { HStack} from "./auxiliary"

export const PersonInfoBlockView = () => {

    return(
    <View style={styles.sectionStyle}>
        <HStack>
            <Text style={styles.textInSections}>Name: </Text>
            <Text style={[styles.textInSections]}>Andrii A O</Text>
        </HStack>
    </View>
    )
}

const styles = StyleSheet.create({
    textInSections: {
        flex: 1,
        textAlign: 'left',
        fontSize: 18,
    },
    sectionStyle: {
        backgroundColor: 'white',
        padding: 5,
        margin: 5,
        borderRadius: 10,
        opacity: 4/5
    }
  });