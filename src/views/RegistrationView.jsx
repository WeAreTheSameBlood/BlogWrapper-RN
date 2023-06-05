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
import { regNerUser } from "../services/ApiManager";


const imgBackgrd = {uri: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'};

export const RegistrationView = ({navigation}) => {

    const registrProps = {
        name: "",
        password: "",
        confirmPassword: "",
        email: ""
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

    const successRegistr = () => {
        Alert.alert("Success",
            "Registration was successful, now you can log into your account.");
        navigation.navigate("Login");
    }

    const handlerRegistrationBtn = async () => {

        await regNerUser(registrParams.email, registrParams.password, registrParams.name)
            ? successRegistr 
            : Alert.alert("Error",
                "The entered data is not unique or incorrect.")

    }

    const checkFields = () => {
        if (
            registrParams.name != "" 
            && registrParams.password != "" 
            && registrParams.confirmPassword != "" 
            && registrParams.email != ""
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
                    placeholder="name"
                    value={registrParams.name}
                    onChangeText={text => handleChangeText("name", text)}
                    keyboardType='default'
                    autoCorrect={false}
                    autoCapitalize='none'
                    />

                    <TextInput
                    style={styles.textInputField}
                    placeholder="email"
                    value={registrParams.email}
                    onChangeText={text => handleChangeText("email", text)}
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize='none'
                    />

                    <TextInput
                    style={styles.textInputField}
                    placeholder="password"
                    value={registrParams.password}
                    onChangeText={text => handleChangeText("password", text)}
                    keyboardType='default'
                    autoCorrect={false}
                    autoCapitalize='none'
                    />

                    <TextInput
                    style={styles.textInputField}
                    placeholder="confirm password"
                    secureTextEntry
                    value={registrParams.confirmPassword}
                    onChangeText={text => handleChangeText("confirmPassword", text)}
                    keyboardType='default'
                    autoCorrect={false}
                    autoCapitalize='none'
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