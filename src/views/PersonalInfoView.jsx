import React, { useEffect, useState } from "react";
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
import { getUserByToken, removeToken, user } from "../services/ApiManager";

const imgAvatar = {uri: 'https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/Гигачад.jpg/640px-Гигачад.jpg'}

const userModel = {
    dateCreated: '',
    details: '',
    email: '',
    extra_details: '',
    name: '',
    profession: '',
    skills: ''
}

export const PersonalInfoView = ({ navigation }) => {

    const [user, setUser] = useState(userModel)

    useEffect( () => {
        async function fetchData() {
        setUser( await getUserByToken())
    }
    fetchData();
    console.log("<<<<->>>>> " + user.dateCreated);

    }, [])

    const logout = () => {
        removeToken();
        navigation.navigate("Login")
    }

    return(
    
        <View>

            <HStack>

                <VStack>
                    <Text style={styles.textHeader}>Personal info</Text>
                    <Text style={[styles.textHeader, {fontSize: 16}]}>Last update: 30.02.2024</Text>
                </VStack>

                <Spacer/>
                <Image source={imgAvatar} style={styles.image} />

            </HStack>
            

            {/* <PersonalInfoView/> */}  {/* PersonalInfoView not workong */}

            

            <View style={styles.sectionStyle}>
                <HStack>
                    <Text style={styles.textInSections}>Name: </Text>
                    <Text style={styles.textInSections}>{user.name}</Text>
                </HStack>
            </View>
            <View style={styles.sectionStyle}>
                <HStack>
                    <Text style={styles.textInSections}>Date created: </Text>
                    <Text style={styles.textInSections}>{user.dateCreated.split('T')[0]}</Text>
                </HStack>
            </View>
            <View style={styles.sectionStyle}>
                <HStack>
                    <Text style={styles.textInSections}>Email: </Text>
                    <Text style={styles.textInSections}>{user.email.slice(0, 5)}...{user.email.slice(-10)}</Text>
                </HStack>
            </View>
            <View style={styles.sectionStyle}>
                <HStack>
                    <Text style={styles.textInSections}>Profession: </Text>
                    <Text style={styles.textInSections}>{user.profession}</Text>
                </HStack>
            </View>
            <View style={styles.sectionStyle}>
                <HStack>
                    <Text style={styles.textInSections}>Skills: </Text>
                    <Text style={styles.textInSections}>{user.skills}</Text>
                </HStack>                    
            </View>
            <View style={styles.sectionStyle}>
                <HStack>
                    <Text style={styles.textInSections}>Extra details: </Text>
                    <Text style={styles.textInSections}>{user.extra_details}</Text>
                </HStack>                    
            </View>

                

            <View style={[{alignItems: 'center'}]}>
                <TouchableOpacity 
                style={GeneralStyles.generalBtn}
                onPress={logout}>
                        <Text style={GeneralStyles.textInGeneralBtn}>LOGOUT</Text>
                </TouchableOpacity>
            </View>
            
        </View>
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
        margin: 3,
        borderRadius: 10,
        opacity: 4/5
    }
  });