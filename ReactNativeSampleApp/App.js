
// // https://dev.to/davidlecodes/react-navigation-getting-started-3jlh

import React,{Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DashBoard from './app/componets/DashBoard';
import Home from './app/componets/Home';

const AppNavigator = createStackNavigator({
  home:Home,
  dashboard:DashBoard
})

const AppContainer = createAppContainer(AppNavigator)
export default AppContainer;