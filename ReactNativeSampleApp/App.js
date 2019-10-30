
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

constructor(){
  super();
}

  state = {
    calResult: ''
 }


PressEqualKey() {
  const text = this.state.calResult
}

KeyPress = (text) => {

  if(text == '=')
  {
     return this.PressEqualKey();
  }

  this.setState({
    calResult: this.state.calResult + text
  })
  console.log(text)
}

  opertion(operation){
      switch(operation)
      {
          case 'del':
            let text =this.state.calResult.split('')
            text.pop()
            this.setState({
              calResult:text.join('')
            })
      }
  }




  render(){

   let rows = []
   let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
   
   for(let i = 0;i<4;i++)
   {
     let row = []
     for(let j =0; j<3;j++)
     {
       row.push(<TouchableOpacity onPress={() => this.KeyPress(nums[i][j])} style={style.btn}>
         <Text style={style.btnText}>{nums[i][j]}</Text>
       </TouchableOpacity>)
     }
     rows.push(<View style={style.row}>{row}</View>)
   }

let operations = ['del','+','-','*','/']
let ops=[]
for(let i=0;i<4;i++)
{
  ops.push(<TouchableOpacity onPress={() => this.opertion(operations[i])} style={style.btn}>
    <Text style={style.btnText}>{operations[i]}</Text>
  </TouchableOpacity>)
}
    return(
      <View style={style.container}>
          <View style={style.result}>
            <Text style={style.resultText}>{this.state.calResult}</Text>
          </View>
           <View style={style.calculation}>
           <Text style={style.calculationText}>1111</Text>
           </View>
           <View style={style.buttons}>
              <View style={style.numbers}>
                {rows}
              </View>
              <View style={style.operations}>
                 {ops}
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
  btnText:{
   fontSize:35
  },
  btn:{
     flex:1,
     alignItems:'center',
     alignSelf:'stretch',
     justifyContent:'center',
     backgroundColor:'purple'

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

