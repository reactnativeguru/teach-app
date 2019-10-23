import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Home';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/List';
import ImageScreen from './src/screens/Image';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen.js';
import SquareScreen from './src/screens/SquareScreen.js';
import SquareScreenWithReducer from './src/screens/SquareScreenWithReducer';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareWithReducer: SquareScreenWithReducer,
    Text: TextScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions :{
    title:'App'
  }
})


export default createAppContainer(navigator)
