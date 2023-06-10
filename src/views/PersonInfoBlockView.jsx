import { 
    View, 
    Text,
    StyleSheet, 
} from "react-native"
import { HStack} from "./auxiliary"

export const PersonInfoBlockView = ({nameOfField, textInField}) => {

    return(
    <View style={styles.sectionStyle}>
        <HStack>
            <Text style={styles.textInSections}>{nameOfField}: </Text>
            <Text style={[styles.textInSections]}>{textInField}</Text>
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