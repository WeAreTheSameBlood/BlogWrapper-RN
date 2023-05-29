import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginPageView } from './views/LoginPageView';
import { RecoverPassView } from './views/RecoverPassView';
import { MainPageView } from './views/MainPageView';
import { RegistrationView } from './views/RegistrationView';


const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPageView}/>
                <Stack.Screen name="Registration" component={RegistrationView}/>
                <Stack.Screen name="Recover Password" component={RecoverPassView}/>
                <Stack.Screen name="Main" component={MainPageView}/>
             </Stack.Navigator>
        </NavigationContainer>
)}