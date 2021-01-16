import * as React from 'react';
import {Text,View,TouchableOpacity, StyleSheet, Alert} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component{
  render(){
    return(
      <AppConatiner/>
    );
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  BottomTab:{screen:AppTabNavigator},
})

const AppConatiner = createAppContainer(switchNavigator);