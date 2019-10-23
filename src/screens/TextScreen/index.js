import React, {useState} from "react";
import { 
    View,
    Text,
    StyleSheet, TextInput
} from "react-native";

const TextScreen = (props) => {
    const [name, setName] = useState('')
    return (
        <View style={styles.container}>
        <Text>Enter name</Text>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newValue) => setName(newValue) }

        />
        <Text>{name}</Text>
    </View>
    )
}


export default TextScreen;

const styles = StyleSheet.create({
    container: {
     
    },
    input :{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
});