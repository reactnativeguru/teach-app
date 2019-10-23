import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = props => {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
        title='Add a color'
      />
      <View
        style={{
          height: 100,
          width: 100,
          // backgroundColor: 'rgb(44, 44, 44)'
          backgroundColor: randomRgb()
        }}
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item
              }}
            />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
