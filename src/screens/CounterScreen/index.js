import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = props => {
  const [counter, setCounter] = useState(0); // init state values, setCounter, function updates counter variable

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setCounter(counter + 1);
        }}
        title='Increase'
      />

      <Button
        onPress={() => {
          setCounter(counter - 1);
        }}
        title='Decrease'
      />
    </View>
  );
};
export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
