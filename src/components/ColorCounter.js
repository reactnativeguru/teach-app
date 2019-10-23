import React from "react";
import { 
    View,
    Text,
    StyleSheet, Button
} from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => (
    <View style={styles.container}>
        <Text>{color}</Text>
        <Button onPress={() => onIncrease()}  title={`Increase ${color}`}/>
        <Button onPress={() => onDecrease()}  title={`Decrease ${color}`}/>
    </View>
    )
export default ColorCounter;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    }
});