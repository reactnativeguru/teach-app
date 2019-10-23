import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const TextScreen = (props) => (
    <View style={styles.container}>
        <Text>TextScreen</Text>
    </View>
    )
export default TextScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});