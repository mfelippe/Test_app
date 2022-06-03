import React, { useState, useCallback, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import { Appbar, Card, Button, List, Title } from "react-native-paper";
import { auth } from "../firebase-config";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

const Home = ({ route }) => {
  const navigation = useNavigation();

  const handSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.replace("index");
      })
      .catch((error) => {
        alert("Ops");
      });
  };
  return (
    <>
      <View>
        <Appbar.Header style={{ backgroundColor: "#50808E" }}>
          <Appbar.Content title="Welcome to our Cafe" />
        </Appbar.Header>
      </View>
      <View style={styles.Header}>
        <Appbar.Header style={{ backgroundColor: "#84B59F" }}>
          <Appbar.Content
            title={"Hi " + route.params?.user}
            style={{ marginLeft: 0 }}
          />
          <Button
            icon="human-scooter"
            mode="contained"
            color="#50808E"
            onPress={handSignOut}
          >
            SIGN OUT
          </Button>
        </Appbar.Header>
      </View>
      <View style={styles.container}>
        {/**
         * 
         
<Card style={{ backgroundColor: "#50808E" }}>
          <Card.Cover
            style={styles.mainImage}
            source={require("./pictures/fresh.png")}
          />
          <Card.Actions style={{ justifyContent: "center" }}>
            <Button
              icon="food-outline"
              mode="contained"
              color="#A3C9A8"
              onPress={() => navigation.navigate("Menu")}
            >
              View Our Menu
            </Button>
          </Card.Actions>
        </Card>

         */}
        <ImageBackground
          source={require("./pictures/fresh.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Button
            style={{
              height: 40,
              width: 200,
              marginLeft: "25%",
              marginTop: "80%",
            }}
            icon="food-outline"
            mode="contained"
            color="#DDD8C4"
            onPress={() => navigation.navigate("Menu")}
          >
            View Our Menu
          </Button>
        </ImageBackground>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#ddd8c4",
    alignItems: "stretch",
  },
  container: {
    flex: 1,
  },
  mainImage: {
    height: "86%",
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
export default Home;
