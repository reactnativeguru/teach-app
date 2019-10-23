import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === {red: 0, green: 0, blue: 0}
  // action === how to change the state, colorToChange, red, green, blue, +15 or -15
  switch (action.colorToChange) {
    case 'red':
    return state.red + action.amount > 255 || state.red + action.amount < 0
    ? state
    : { ...state, red: state.red + action.amount };
      break;
      //TODO
    // add cases as per red above to check for the value above 255 and below 0  
    case 'green':
      return { ...state, green: state.green + action.amount };

      break;
    case 'blue':
     //TODO

            // add cases as per red above to check for the value above 255 and below 0  

      return { ...state, blue: state.blue + action.amount };

      break;

    default:
      return state;
  }
};

const SquareScreenWithReducer = props => {
  const initialState = { red: 0, green: 0, blue: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }
      />

      <ColorCounter
        color='Blue'
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
        }
      />

      <ColorCounter
        color='Green'
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
        }
      />

      <View
        style={{
          height: 100,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
        }}
      />
    </View>
  );
};
export default SquareScreenWithReducer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
