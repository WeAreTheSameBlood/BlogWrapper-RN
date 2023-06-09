import React, { useCallback, useEffect, useState } from "react";
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
import { GeneralStyles } from "../styles/GeneralStyles";
import { ButtonBar } from "./ButtonBar";
import { AllPostsView } from "./AllPostsView";
import { PersonalInfoView } from "./PersonalInfoView";
import { UserPostsView } from "./UserPostsView";

const imgBackgrd = {uri: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'}

export const MainPageView =() => {

    const [activeTab, setActiveTab] = useState(0);

    const tabsName = ['All posts', 'My posts', 'Profile'];

    const handlerTabPress = (index) => {
        setActiveTab(index);
        console.log('------- Tab activate: ' + index);
    };
    
    return(
        <ImageBackground
        source={imgBackgrd}
        style={GeneralStyles.imgBackgrd}
        >
            <View style={styles.tab}>

                {activeTab == 0 
                    ? <AllPostsView/> 
                    : (activeTab == 1 
                        ? <UserPostsView/>
                        : <PersonalInfoView/>)}

            </View>

            <ButtonBar activeTab={activeTab} tabs = {tabsName} onTabPress={handlerTabPress} />
             
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    tab: {
        flex:1
    },
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
        margin: 5,
        borderRadius: 10,
        opacity: 4/5
    }
  });