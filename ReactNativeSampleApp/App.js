
 import React,{Component} from 'react';

 import{
   StyleSheet,
   Text,
   Button,
   TextInput,
   TouchableOpacity,
   View
 }from 'react-native'

export default class App extends Component{

  state = {
    userName: '',
    password: ''
 }

 handleEmail = (text) => {
  this.setState({ userName: text })
  console.log(text)

}
handlePassword = (text) => {
  this.setState({ password: text })
  console.log(text)
}

loginButtonPress = () =>{
   console.log('apple')
}

  render(){
    return(
      <View style={style.container}>
        <View >
            <Text style={style.UserFeild}>{this.state.userName}</Text>
        </View>
        <Text>User name</Text>
          <TextInput style={style.textInput} 
          placeholder='username'  
           
          onChangeText = {this.handleEmail}
          />
          <Text>Password</Text>
          <TextInput style={style.textInput}  
          secureTextEntry='true'
          onChangeText = {this.handlePassword}
          placeholder='password'/>
        <TouchableOpacity
          style={style.loginScreenButton}
          onPress={this.loginButtonPress}
          underlayColor='#fff'>
          <Text style={style.loginText}>Login</Text>
          </TouchableOpacity>
      
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex:1,

    justifyContent:'center',
    marginRight:10,
    marginLeft:10,
  },
  UserFeild:{
   fontSize:30,
   textAlign:'center',
   marginTop:10,
   fontWeight:'bold',

  },
  textInput:{
    marginTop:20,
 
    borderColor:'red',
     height:40,
     fontSize:20,
     borderWidth: 1 

  },
  text:{
     fontSize:50,
     fontWeight:'bold',
  },
  loginScreenButton:{

    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }
});

