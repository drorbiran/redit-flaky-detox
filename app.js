/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import TopicsList from './src/screens/TopicsList';
import {registerScreens} from './src/screens';

registerScreens();

class react_native_navigation_bootstrap extends Component {

  render() {
    return (
        <TopicsList/>
    );
  }
}

Navigation.startSingleScreenApp({
    screen: {
        screen: 'TopicsList',
        title: 'Reddit App'
    }
});
