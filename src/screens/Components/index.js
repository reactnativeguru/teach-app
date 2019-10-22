import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const Components = (props) => (
    <View style={styles.container}>
        <Text>Components</Text>
    </View>
    )
export default Components;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});