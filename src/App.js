/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Nelson Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
    };
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.currentValue}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  currentValue: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
