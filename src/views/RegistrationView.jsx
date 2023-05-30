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
import { GeneralStyles } from "../styles/GeneralStyles";

const imgBackgrd = {uri: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'}

export const RegistrationView = ({navigation}) => {

    const registrProps = {
        username: "",
        password: "",
        confirmPassword: "",
        phoneEmail: ""
    };

    const [registrParams, setRegistrParams] = useState(registrProps);

    const handleChangeText = (key, value) => {
        setRegistrParams( prevLoginParams => ({
            ...prevLoginParams,
            [key]: value
        })
        );
    }

    const [allFieldsFilled, setAllFieldsFilled] = useState(false);
    const [equalsPasswords, setEqualsPasswords] = useState(true);

    const handlerRegistrationBtn = () => {
        // registration operations
        Alert.alert("Success",
        "Registration was successful, now you can log into your account.")
        navigation.navigate("Login");
    }

    const checkFields = () => {
        if (
            registrParams.username != "" 
            && registrParams.password != "" 
            && registrParams.confirmPassword != "" 
            && registrParams.phoneEmail != ""
        ) {
            setAllFieldsFilled(true)
        } else setAllFieldsFilled(false)
    }

    useEffect( checkFields, [registrParams])

    useEffect(() => {
        setEqualsPasswords(registrParams.password === registrParams.confirmPassword)
    }, [registrParams.password, registrParams.confirmPassword])

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
                    value={registrParams.username}
                    onChangeText={text => handleChangeText("username", text)}
                    keyboardType='default'
                    />

                    <TextInput
                    style={styles.textInputField}
                    placeholder="email or phone"
                    value={registrParams.phoneEmail}
                    onChangeText={text => handleChangeText("phoneEmail", text)}
                    keyboardType='default'
                    />

                    <TextInput
                    style={styles.textInputField}
                    placeholder="password"
                    value={registrParams.password}
                    onChangeText={text => handleChangeText("password", text)}
                    keyboardType='default'
                    />

                    <TextInput
                    style={styles.textInputField}
                    placeholder="confirm password"
                    secureTextEntry
                    value={registrParams.confirmPassword}
                    onChangeText={text => handleChangeText("confirmPassword", text)}
                    keyboardType='default'
                    />
                   
                    <TouchableOpacity 
                    style={GeneralStyles.generalBtn} 
                    onPress={handlerRegistrationBtn}
                    disabled={allFieldsFilled ? !equalsPasswords : true}
                    activeOpacity={3/4}
                    >
                        {
                        allFieldsFilled
                        ? (
                            equalsPasswords
                            ? <Text style={GeneralStyles.textInGeneralBtn}>Registration</Text>
                            : <Text style={[GeneralStyles.textInGeneralBtn, {color: 'red'}]}>Password mismatch</Text>
                            )
                        : <Text style={[GeneralStyles.textInGeneralBtn, {color: 'yellow'}]}>All fields must be filled</Text>
                        }
                        
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </ImageBackground>
    )
}

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
  });