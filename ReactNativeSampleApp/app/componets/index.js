import React, { Component } from 'react';
import { StyleSheet,Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Hello, world!</Text>
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