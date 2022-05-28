import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Index({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        color="#DDD8C4"
        onPress={() => navigation.navigate("Home")}
      >
        SIGN IN
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  //https://coolors.co/ddd8c4-a3c9a8-84b59f-69a297-50808e
  container: {
    flex: 1,
    backgroundColor: "#69A297",
    alignItems: "center",
    justifyContent: "center",
  },
});