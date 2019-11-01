
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


class App extends React.Component {

  onPress = () => {
    // Navigate to the HelloWorld view
    this.props.navigation.navigate('HelloWorld')
  }
  render() {
    return (
      <View style={style.container}>
        <Text>Welcome to React Navigation!</Text>
        <Button 
          title="Tap me 😄"
          onPress={this.onPress}
        />
      </View>
    )
  }
  }

  class HelloWorld extends React.Component {
    render() {
      return (
        <View style={style.container}>
          <Text >Hello World!🤓</Text>
        </View>
      )
    }
  }

const style = StyleSheet.create({
  container: {
     marginTop:50,
     height:80,
     backgroundColor:'green',
    justifyContent: "center",
    alignItems: "center"
  },
});

const AppNavigator = createStackNavigator({
  Home: App,
  HelloWorld
})

const AppContainer = createAppContainer(AppNavigator)
export default AppContainer;
