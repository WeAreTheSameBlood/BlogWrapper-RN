import { useState } from "react";
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

export const LoginPageView = () => {

    const imgBackgrd = {uri: 'https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?cs=srgb&dl=pexels-johannes-plenio-1423600.jpg&fm=jpg'}

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlerLogin = () => {
        // Login and password processing
        Alert.alert("Login info", 
        "\nLogin:" + username + "\nPassword:" + password)
    }

    const handlerPasswordOptions = () => {
        // Recover pass processing
        Alert.alert("Recover pass info", 
        "Go to the password recovery page")
    }

    const handlerSingUp = () => {
        // Sing Up processing
        Alert.alert("To Sing Up", 
        "Go to registration page")
    }

    return(
        <ImageBackground
        source={imgBackgrd}
        style={styles.imgBackgrd}
        >
            <SafeAreaView style={styles.safeView}>

                <View style={styles.mainForm} >

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

                        <TouchableOpacity onPress={handlerPasswordOptions}>
                            <Text style={styles.icon}>?</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity 
                    style={styles.asLoginBtn} 
                    onPress={handlerLogin}
                    activeOpacity={3/4}
                    >
                        <Text style={styles.textInLoginBtn}>Log In</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                    style={styles.asLoginBtn} 
                    onPress={handlerSingUp}
                    activeOpacity={3/4}
                    >
                        <Text style={styles.textInLoginBtn}>Sign Up</Text>
                    </TouchableOpacity> 

                </View>

            </SafeAreaView>
        </ImageBackground>
    )
};


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
    icon: {
        fontSize: 15,
        color: 'green',
        marginLeft: 5,
      },
  });