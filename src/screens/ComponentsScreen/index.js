import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

let name= "john"

const Components = (props) => (
    <View style={styles.container}>
        <Text style={styles.header}>Getting Started with React Native</Text>
        <Text style={styles.subHeader}>Components {name}</Text>
    </View>
    )
export default Components;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header:{
        fontSize: 45

    },
    subHeader:{
        fontSize: 20
    }
});