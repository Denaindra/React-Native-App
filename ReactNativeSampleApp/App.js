
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

  constructor() {
    super();
    this.operations = ['del', '+', '-', '*', '/']

  }

  state = {
    calInput: '',
    calResult:''
  }


  PressEqualKey() {
    const text = this.state.calInput
    this.setState({
      calResult:eval(text)
    })
  }
  
  Validate(){
    switch(this.state.calInput.slice(-1))
    {
      case'+':
      case'-':
      case'/':
      case'*':
      case'.':
       return false;
       break;
    }
    return true;
  }



  KeyPress = (text) => {

    if (text == '=') {
      return this.Validate() && this.PressEqualKey();
    }

    this.setState({
      calInput: this.state.calInput + text
    })
  }

  opertion(operation) {
    switch (operation) {
      case 'del':
        let text = this.state.calInput.split('')
        text.pop()
        this.setState({
          calInput: text.join('')
        })
        break;
      case '+':
      case '-':
      case '*':
      case '/':

        const lastChar = this.state.calInput.split('').pop()
        if (this.operations.indexOf(lastChar) > 0) return

        if (this.state.text == "") return
        this.setState({
          calInput: this.state.calInput + operation
        })
    }
  }




  render() {

    let rows = []
    let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]

    for (let i = 0; i < 4; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(<TouchableOpacity onPress={() => this.KeyPress(nums[i][j])} style={style.btn}>
          <Text style={style.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>)
      }
      rows.push(<View style={style.row}>{row}</View>)
    }

    let operations;

    let ops = []
    for (let i = 0; i < 5; i++) {
      ops.push(<TouchableOpacity onPress={() => this.opertion(this.operations[i])} style={style.btn}>
        <Text style={style.btnText}>{this.operations[i]}</Text>
      </TouchableOpacity>)
    }
    return (
      <View style={style.container}>
        <View style={style.result}>
          <Text style={style.resultText}>{this.state.calInput}</Text>
        </View>
        <View style={style.calculation}>
          <Text style={style.calculationText}>{this.state.calResult}</Text>
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
    flex: 1,
    justifyContent: 'center'
  },
  resultText: {
    fontSize: 50,
    color: 'gray'
  },
  calculationText: {
    fontSize: 35,
    color:'gray',
    marginRight:5
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  btnText: {
    fontSize: 35
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'yellow'

  },
  result: {
    flex: 1,
    paddingTop:20,
    backgroundColor:'#fcfcfc',
    alignItems: 'flex-end',
    justifyContent: 'center'
    },
  calculation: {
    flex: .7,
    backgroundColor: '#fcfcfc',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
    backgroundColor: 'yellow',

  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow',

  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  }

});

