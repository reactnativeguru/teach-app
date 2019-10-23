import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = props => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'red', 'greed', 'blue'
    // change === +15, -15

    switch (color) {
      case 'red':
          red + change > 255 || red + change < 0 ? null : setRed(red + change)
        // if (red + change > 255 || red + change < 0) {
        //   return;
        // } else {
        //   setRed(red + change);
        // }
        break;
        case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
              break;
        case 'blue':
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
            break;
    

      default:
        break;
    }
  };

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
      />

      <ColorCounter
        color='Blue'
        onIncrease={() => setColor('blue' , COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        // onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        // onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
      />

      <ColorCounter
        color='Green'
        onIncrease={() => setColor('green' , COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
      />

      <View
        style={{
          height: 100,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};
export default SquareScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
