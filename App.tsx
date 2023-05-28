/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground
} from 'react-native';
import LoginPageView from './src/views/LoginPageView';




function App(): JSX.Element {

  const imgBackgrd = {uri: 'https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?cs=srgb&dl=pexels-johannes-plenio-1423600.jpg&fm=jpg'}

  return (
    <ImageBackground
      source={imgBackgrd}
      style={styles.imgBackgrd}
      >
      <SafeAreaView style={styles.safeView}>
        <LoginPageView/>
      </SafeAreaView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1
  },
  imgBackgrd: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%'
}
});

export default App;
