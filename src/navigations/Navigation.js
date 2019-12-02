import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Account from '../screens/Account';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: Home,
        Account: Account,
    },
    {
        initialRouteName: 'Home',
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
    },
);
export default createAppContainer(TabNavigator);
