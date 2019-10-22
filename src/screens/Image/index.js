import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import ImageDetail from '../../components/ImageDetail'

const ImageScreen = (props) => {
    return(  <View>
        <ImageDetail score="8" title="forest" imageSource={require('../../../assets/images/forest.jpg')}/>
        <ImageDetail score="10" title="beach" imageSource={require('../../../assets/images/mountain.jpg')}/>
        <ImageDetail score="9" title="volcano" imageSource={require('../../../assets/images/beach.jpg')}/>
     </View>)
}
export default ImageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});