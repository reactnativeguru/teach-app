import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

const List = (props) => {
    const friends = [
        { name: "Friend 1"},
        { name: "Friend 2"},
        { name: "Friend 3"},
        { name: "Friend 4"},
        { name: "Friend 5"},
        { name: "Friend 6"},
        { name: "Friend 7"},
    ];

    return <FlatList
    keyExtractor={(friend) => {
        return friend.name
    }}
        data={friends}
        renderItem={({item}) => {
            return <Text key={item.name}>{item.name}</Text>
        }}
     />
}
  

    
export default List;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});