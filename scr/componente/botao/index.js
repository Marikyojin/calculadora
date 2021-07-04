import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const Botao = ({ handlePress, title }) => {

    return (
        <View style={styles.container}>
            <TouchableHighlight onPress={()=>handlePress(title)}>
                <View style={styles.button}>
                    <Text>{title}</Text>
                </View>
            </TouchableHighlight>
        </View>
            );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      flexDirection:"row",
      padding: 5
      
    },
    button: {
      paddingLeft: 5,
      paddingRight: 5,
      alignItems: "center",
      backgroundColor: "#dadce0",
      padding: 10,
      color: "#202124",
      borderRadius: 4,
      elevation: 8,
      width: 83,
      height: 50
    }
  });

export default Botao;