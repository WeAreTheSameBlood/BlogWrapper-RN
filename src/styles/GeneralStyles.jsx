import { StyleSheet } from "react-native"

/**
 *  |   Basic color theme of app  |
 *  V                             V
 * 
 *              #68876a
 *              
 * Use this param like basic and/or reference 
 * color in designing other components  
 */

export const GeneralStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    imgBackgrd: { 
        resizeMode: 'cover',
        height: '100%',
        width: '100%'
    },
    generalBtn: {
        width: 200,
        backgroundColor: '#68876a',
        alignContent: 'center',
        borderRadius: 10,
        padding: 7,
        margin: 5
    },
    textInGeneralBtn: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    },
})