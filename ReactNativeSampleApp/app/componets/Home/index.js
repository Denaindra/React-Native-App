import React,{Component} from 'react';
import styles from './styles'


import {
    Text,
    TextInput,
    Button,
    Alert,
    View
} from 'react-native'

export default class Home extends Component{

    state = {
      username: "",
      password: ""
    }

    LoginButtonPress()
    {
       const {username,password} = this.state
       if(username== 'admin' && password=='admin')
       {
           this.props.navigation.navigate('dashboard')
       }  
       else
       {
        Alert.alert(
            'Login',
            'Mmmm... username/password not match',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]
          );
       }
    }

    render() {
        const {heading,input} = styles
        return (
            <View>
                <Text style={heading}>Login into this app</Text>
                <TextInput style={input} onChangeText={text => this.setState({username:text})} />
                <TextInput secureTextEntry="true" onChangeText={text => this.setState({password:text})} style={input}/>
                 <Button  title='Login' onPress={() => this.LoginButtonPress()}/>
            </View>
        )
    }
}