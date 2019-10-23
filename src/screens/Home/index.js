import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity 
    onPress={() => navigation.navigate('Image')}>
      <Text>View Image</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => navigation.navigate('List')}>
      <Text>View List</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => navigation.navigate('Counter')}>
      <Text>Go to Counter </Text>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => navigation.navigate('Color')}>
      <Text>Go to Colors </Text>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => navigation.navigate('Square')}>
      <Text>Go to Square Screen </Text>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={() => navigation.navigate('SquareWithReducer')}>
      <Text>Go to Square Screen With Reducer </Text>
    </TouchableOpacity>


    <TouchableOpacity 
    onPress={() => navigation.navigate('Text')}>
      <Text>Go to Text Screen </Text>
    </TouchableOpacity>
  </View>
);
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
