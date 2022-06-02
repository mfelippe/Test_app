import React, { useState, useCallback, useRef } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Appbar, Card, Button, List, Title } from "react-native-paper";
import menuItems from "../MenuItems";
import { auth } from "../firebase-config";
import * as firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Home = ({ navigation }) => {
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#50808E" }}>
        <Appbar.Content title="Welcome to our Cafe" />
      </Appbar.Header>

      <Appbar.Header style={{ backgroundColor: "#84B59F" }}>
        <Appbar.Content title="Olá, Marcos Felippe" />
        <Button
          mode="contained"
          color="#50808E"
          onPress={() => navigation.navigate("index")}
        >
          SIGN OUT
        </Button>
      </Appbar.Header>
      <View>
        <Card>
          <Card.Cover
            style={styles.mainImage}
            source={require("./pictures/fresh.png")}
          />
          <Card.Actions style={{ justifyContent: "center" }}>
            <Button
              mode="contained"
              color="#50808E"
              onPress={() => navigation.navigate("Menu")}
            >
              View Our Menu
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd8c4",
    alignItems: "center",
    justifyContent: "center",
  },
  mainImage: {
    height: "85%",
    width: "100%",
  },
});
export default Home;
