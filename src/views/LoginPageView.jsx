import { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Button,
    TouchableOpacity, 
    ImageBackground, 
    SafeAreaView
} from "react-native"
import { GeneralStyles } from "../styles/GeneralStyles";

const imgBackgrd = {uri: 'https://images.unsplash.com/photo-1502252430442-aac78f397426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}

export const LoginPageView = ({ navigation }) => {

    const loginProps = {
        username: "",
        password: ""
    }

    const [loginParams, setLoginParams] = useState({loginProps})

    const handleChangeText = (key, value) => {
        setLoginParams( prevLoginParams => ({
            ...prevLoginParams,
            [key]: value
        })
        );
    }

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
        style={GeneralStyles.imgBackgrd}
        >
            <SafeAreaView style={GeneralStyles.safeArea}>

                <View style={styles.mainForm} >

                    <TextInput
                    style={styles.textInputField}
                    placeholder="username"
                    value={loginParams.username}
                    onChangeText={text => handleChangeText("username", text)}
                    keyboardType='default'
                    />

                    <View 
                    style={[styles.textInputField, {flexDirection: 'row'}]}>

                        <TextInput
                        style={{width: 160}}    // custom style param
                        placeholder="password"
                        secureTextEntry
                        value={loginParams.password}
                        onChangeText={text => handleChangeText("password", text)}
                        keyboardType='default'
                        />

                        <TouchableOpacity onPress={handlerRecoverPassBtn}>
                            <Text style={styles.icon}>?</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity 
                    style={GeneralStyles.generalBtn} 
                    onPress={handlerLogin}
                    activeOpacity={3/4}
                    >
                        <Text style={GeneralStyles.textInGeneralBtn}>Log In</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                    style={GeneralStyles.generalBtn} 
                    onPress={handlerSingUp}
                    activeOpacity={3/4}
                    >
                        <Text style={GeneralStyles.textInGeneralBtn}>Sign Up</Text>
                    </TouchableOpacity> 

                </View>

            </SafeAreaView>
        </ImageBackground>
    )
};


const styles = StyleSheet.create({
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
    icon: {
        fontSize: 15,
        color: '#68876a',
        marginLeft: 5,
    },
  });