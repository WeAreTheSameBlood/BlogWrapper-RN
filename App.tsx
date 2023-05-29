/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LoginPageView } from './src/views/LoginPageView';
import { RecoverPassView } from './src/views/RecoverPassView';
import { MainPageView } from './src/views/MainPageView';
import { Navigation } from './src/Navigation';




function App(): JSX.Element {

  return (
        // <LoginPageView/>
        // <RecoverPassView/>
        // <MainPageView/>
        <Navigation />
  );
}

export default App;
