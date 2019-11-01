
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Hello, world! gayan</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
      flex: 1, 
      justifyContent: "center",
      alignItems: "center"
  }
});