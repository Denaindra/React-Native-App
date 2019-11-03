import React,{Component} from 'react';
import styles from './styles'


import {
    Text,
    TextInput,
    Button,
    View
} from 'react-native'

export default class Home extends Component{

    state = {
      username: "",
      password: ""
    }

    LoginButtonPress()
    {
       
    }

    render() {
        const {heading,input} = styles
        return (
            <View>
                <Text style={heading}>Login into this app</Text>
                <TextInput style={input} />
                <TextInput secureTextEntry="true" style={input}/>
                 <Button  title='Login' onPress={() => this.LoginButtonPress()}/>
            </View>
        )
    }
}