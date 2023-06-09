import React, { useCallback, useEffect, useState } from "react";
import { 
    View, 
    Text,
    Image,
    StyleSheet, 
    TextInput, 
    Alert, 
    TouchableOpacity, 
    ImageBackground, 
    SafeAreaView,
    FlatList
} from "react-native"
import { HStack, Spacer, VStack} from "./auxiliary"
import { GeneralStyles } from "../styles/GeneralStyles";

const imgAvatar = {uri: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/Гигачад.jpg/640px-Гигачад.jpg'}

export const PersonalInfoView =() => {

    const [name, setName] = useState("Hybchenko A.O.")
    const [dateOFBirth, setDateOFBirth] = useState("15.06.1998")
    const [country, setCountry] = useState("Ukraine")
    const [email, setEmail] = useState("hlybchenko.andrii@gmail.com")

    return(
    
        <VStack>

            <HStack>

                <VStack>
                    <Text style={styles.textHeader}>Personal info</Text>
                    <Text style={[styles.textHeader, {fontSize: 16}]}>Last update: 30.02.2024</Text>
                </VStack>

                <Spacer/>
                <Image source={imgAvatar} style={styles.image} />

            </HStack>

            <VStack>
                <View style={styles.sectionStyle}>

                    <HStack>
                        <Text style={styles.textInSections}>Name: </Text>
                        <Text style={[styles.textInSections]}>{name}</Text>
                    </HStack>
                    <HStack>
                        <Text style={styles.textInSections}>Date of Birth: </Text>
                        <Text style={styles.textInSections}>{dateOFBirth}</Text>
                    </HStack>
                    <HStack>
                        <Text style={styles.textInSections}>Country: </Text>
                        <Text style={styles.textInSections}>{country}</Text>
                    </HStack>
                    <HStack>
                        <Text style={styles.textInSections}>Email: </Text>
                        <Text style={styles.textInSections}>{email.slice(0, 5)}...{email.slice(-10)}</Text>
                    </HStack>
                    
                </View>
                
            </VStack>
            
        </VStack>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        resizeMode: 'cover',
        borderRadius: 30,
        margin: 5
    },
    textHeader: {
        textAlign: 'left',
        padding: 5,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    }, 
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