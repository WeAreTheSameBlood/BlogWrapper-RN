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

export const LoginPageView = ({ navigation }) => {

    const imgBackgrd = {uri: 'https://images.unsplash.com/photo-1502252430442-aac78f397426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlerLogin = () => {
        navigation.navigate("Main");
    }

    const handlerRecoverPassBtn = () => {
        navigation.navigate("Recover Password");
    }

    const handlerSingUp = () => {
        navigation.navigate("Registration");
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
                    placeholder="username"
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

                        <TouchableOpacity onPress={handlerRecoverPassBtn}>
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
                    style={[styles.asLoginBtn]} 
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
        color: '#68876a',
        marginLeft: 5,
      },
  });