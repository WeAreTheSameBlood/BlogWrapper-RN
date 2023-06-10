/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Navigation } from './src/services/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GeneralStyles } from './src/styles/GeneralStyles';




function App(): JSX.Element {

  return (
    <SafeAreaProvider style={GeneralStyles.safeArea}>
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
