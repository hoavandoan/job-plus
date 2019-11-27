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
    View
} from 'react-native';
import Map from './src/screens/Map';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <View>
                <Map/>
            </View>
        </SafeAreaView>
    </>
  );
};



export default App;
