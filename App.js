import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/Home';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/List';
import ImageScreen from './src/screens/Image';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions :{
    title:'App'
  }
})


export default createAppContainer(navigator)
