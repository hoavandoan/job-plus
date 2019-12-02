/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
    View,
    YellowBox
} from 'react-native';
import Map from './src/screens/Map';
import Navigation from './src/navigations/Navigation';
YellowBox.ignoreWarnings(['Warning: ']);
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                {/*<Map/>*/}
                <Navigation/>
            </View>
        </SafeAreaView>
    </>
  );
};



export default App;
