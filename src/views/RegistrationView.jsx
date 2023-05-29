import { useState, useEffect } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Alert, 
    TouchableOpacity, 
    ImageBackground, 
    SafeAreaView
} from "react-native"
import { VStack } from "./auxiliary";


export const RegistrationView = ({navigation}) => {

    const imgBackgrd = {uri: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'}

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneEmail, setPhoneEmail] = useState("");

    const [allFieldsFilled, setAllFieldsFilled] = useState(false);
    const [equalsPasswords, setEqualsPasswords] = useState(true);

    const handlerRegistrationBtn = () => {
        // registration operations
        Alert.alert("Success",
        "Registration was successful, now you can log into your account.")
        navigation.navigate("Login");
    }

    useEffect(() => {
        if (
            username != "" 
            && password != "" 
            && confirmPassword != "" 
            && phoneEmail != "" 
        ) {
            setAllFieldsFilled(true)
        } else setAllFieldsFilled(false)
    }, [username, password, confirmPassword, phoneEmail])

    useEffect(() => {
        setEqualsPasswords(password === confirmPassword)
    }, [password, confirmPassword])

    return(
        <ImageBackground
        source={imgBackgrd}
        style={styles.imgBackgrd}
        >
            <SafeAreaView style={styles.safeView}>

                <View style={styles.mainForm} >

                    <TextInput
                    style={styles.textInputField}
                    placeholder="username"
                    value={username}
                    onChangeText={setUsername}
                    keyboardType='default'
                    />

                    <TextInput
                    style={styles.textInputField}
                    placeholder="email or phone"
                    value={phoneEmail}
                    onChangeText={setPhoneEmail}
                    keyboardType='default'
                    />

                    <TextInput
                    style={styles.textInputField}
                    placeholder="password"
                    value={password}
                    onChangeText={setPassword}
                    keyboardType='default'
                    />

                    <TextInput
                    style={styles.textInputField}
                    placeholder="confirm password"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    keyboardType='default'
                    />
                   
                    <TouchableOpacity 
                    style={styles.asLoginBtn} 
                    onPress={handlerRegistrationBtn}
                    disabled={allFieldsFilled ? !equalsPasswords : true}
                    activeOpacity={3/4}
                    >
                        {
                        allFieldsFilled
                        ? (
                            equalsPasswords
                            ? <Text style={styles.textInLoginBtn}>Registration</Text>
                            : <Text style={[styles.textInLoginBtn, {color: 'red'}]}>Password mismatch</Text>
                            )
                        : <Text style={[styles.textInLoginBtn, {color: 'yellow'}]}>All fields must be filled</Text>
                        }
                        
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1
    },
    imgBackgrd: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%'
    },
    mainForm: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textInputField: {
        width: 200,
        height: 40, 
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
        margin: 3 
    },
    asLoginBtn: {
        width: 200,
        backgroundColor: '#68876a',
        alignContent: 'center',
        borderRadius: 10,
        padding: 7,
        margin: 5
    },
    textInLoginBtn: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    },
  });