
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
          <View style={style.result}>
            <Text style={style.resultText}>12dsdsds34</Text>
          </View>
           <View style={style.calculation}>
           <Text style={style.calculationText}>1111</Text>
           </View>
           <View style={style.buttons}>
              <View style={style.numbers}>
                <View style={style.row}>
                   <Button title="0" />
                   <Button title="0" />
                   <Button title="0" />
                </View>
                <View style={style.row}>
                   <Button title="1" />
                   <Button title="1" />
                   <Button title="1" />
                </View>
                <View style={style.row}>
                   <Button title="2" />
                   <Button title="2" />
                   <Button title="2" />
                </View>
                <View style={style.row}>
                   <Button title="3" />
                   <Button title="3" />
                   <Button title="3" />
                </View>
              </View>
              <View style={style.operations}>
                 <Button title="+"/>
                 <Button title="+"/>
                 <Button title="+"/>
                 <Button title="+"/>
              </View>
           </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
  },
  resultText:{
    fontSize:50,
    color:'white',
  },
  calculationText:{
   fontSize:35,
  },
  row:{
      flexDirection:'row',
      flex:1,
      justifyContent:'space-around',
      alignItems:'stretch'
  },
  result:{
    flex:2,
    alignItems:'flex-end',
    justifyContent:'center',
    backgroundColor:'red'
  },
  calculation:{
    flex:1,
    backgroundColor:'green',
    alignItems:'flex-end',
    justifyContent:'center',
  },
  buttons:{
    flex:7,
    flexDirection:'row',
    backgroundColor:'purple',

  },
  numbers:{
   flex:3,
   backgroundColor:'yellow',

  },
  operations:{
      flex:1,
      backgroundColor:'black',
      justifyContent:'space-around',
      alignItems:'stretch'
  }

});

