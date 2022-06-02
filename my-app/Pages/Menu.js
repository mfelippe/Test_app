import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Appbar, Card, Button, List, Title } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Menu = ({ navigation }) => {
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#50808E" }}>
        <Appbar.Content title="MENU" />
      </Appbar.Header>
      <View style={styles.container}>
        <Text>Menu</Text>
        <Button
          mode="contained"
          color="#50808E"
          onPress={() => navigation.goBack()}
        >
          GO BACK
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Menu;
