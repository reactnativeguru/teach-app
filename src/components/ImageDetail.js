import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

const ImageDetail = (props) => {
console.log(props)
    return (
        <View>
        <Image source={props.imageSource}/>
        <Text>{props.title}</Text>
        <Text>{props.score}</Text>
    </View>
    )
    
}
export default ImageDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});