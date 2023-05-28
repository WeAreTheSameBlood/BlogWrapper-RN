import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity} from "react-native"
import { HStack, VStack } from "./auxiliary";

const LoginPageView = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Login and password processing
        Alert.alert("Remember password", 
        "\nLogin:" + username + "\nPassword:" + password)
    }

    const handlePasswordOptions = () => {
        // Recover pass processing
        Alert.alert("Recover pass info", 
        "Go to the password recovery page")
    }

    return(
        <View style={styles.upperForm} >
            <TextInput
            style={styles.textInputField}
            placeholder="login"
            value={username}
            onChangeText={setUsername}
            keyboardType='default'
            />

            <View 
            style={[styles.textInputField, {flexDirection: 'row'}]}>

                <TextInput
                style={{width: 160}}    // custom style param
                placeholder="password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                keyboardType='default'
                />

                <TouchableOpacity onPress={handlePasswordOptions}>
                    <Text style={styles.icon}>?</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity 
            style={styles.asLoginBtn} 
            onPress={handleLogin}
            activeOpacity={3/4}
            >
                <Text style={styles.textInLoginBtn}>Log In</Text>
            </TouchableOpacity> 

            <TouchableOpacity 
            style={styles.asLoginBtn} 
            onPress={handleLogin}
            activeOpacity={3/4}
            >
                <Text style={styles.textInLoginBtn}>Sign Up</Text>
            </TouchableOpacity> 

        </View>
    )
};


const styles = StyleSheet.create({
    upperForm: {
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
        borderRadius: 10,
        padding: 7,
        margin: 5
    },
    textInLoginBtn: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    },
    icon: {
        fontSize: 15,
        color: 'green',
        marginLeft: 5,
      },
  });

export default LoginPageView;