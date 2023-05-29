import { useEffect, useState } from "react";
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

export const RecoverPassView = () => {

    const imgBackgrd = {uri: 'https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'}

    const [emailOrPhone, setEmailOrPhone] = useState("");

    const [isBtnPress, setIsBrnPress] = useState(false);
    const [cooldownBtn, setCooldownBtn] = useState(45);

    const handlerBtnPress = () => {
        handlerResetPassword();
        
        if (!isBtnPress){
            setIsBrnPress(true);
            setCooldownBtn(45);
        }
    }

    useEffect(() => {
        let interval = null;

        if (isBtnPress) {
            interval = setInterval(() => {
                setCooldownBtn((prewTime) => prewTime - 1);
            }, 1000)
        }

        if (cooldownBtn === 0) {
            setIsBrnPress(false);
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }
    }, [isBtnPress, cooldownBtn])

    const handlerResetPassword = () => {
        // Reset pass processing
        Alert.alert("Reset password", 
        "\nPassword was reset, \ncheck your email \nor phone message")
    }

    const handlerBackBtn = () => {
        // Back btn processing
        Alert.alert("Back btn was press", 
        "You just clicked on the Back button")
    }

    return(
        <ImageBackground
        source={imgBackgrd}
        style={styles.imgBackgrd}
        >
             <SafeAreaView style={styles.safeView}>
                <View style={{flex:1}}>

                    <View style={styles.mainForm} >

                        <TextInput
                        style={styles.textInputField}
                        placeholder="enter email or phone"
                        value={emailOrPhone}
                        onChangeText={setEmailOrPhone}
                        keyboardType='default'
                        />

                        <TouchableOpacity 
                        style={styles.asLoginBtn} 
                        onPress={handlerBtnPress}
                        activeOpacity={3/4}
                        disabled={isBtnPress}
                        >
                            <Text style={styles.textResetPassBtn}>
                                {isBtnPress ? `Wait ${cooldownBtn} sec` : 'Reset password'}
                            </Text>

                        </TouchableOpacity> 

                    </View>

                    <View style={styles.backForm}>
                        <TouchableOpacity 
                        style={styles.backBtn} 
                        onPress={handlerBackBtn}
                        activeOpacity={3/4}
                        >
                            <Text style={styles.textResetPassBtn}>Back</Text>
                        </TouchableOpacity> 
                    </View>
                    
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
    backForm: {
        position: 'absolute',
        
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    backBtn: {
        width: 60,
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#68876a',
        borderRadius: 10,
        margin: 5
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
        justifyContent: 'center',
        borderRadius: 10,
        padding: 7,
        margin: 5
    },
    textResetPassBtn: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    },
  });