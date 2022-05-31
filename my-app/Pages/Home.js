import React, { useState, useCallback, useRef } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Appbar, Card, Button, List, Title } from "react-native-paper";
import menuItems from "../MenuItems";
import { auth } from "../firebase-config";
import * as firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);

  const handleSignOut = () => {
    navigation.replace("index");
  };
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#50808E" }}>
        <Appbar.Content title="Welcome to our Cafe" />
      </Appbar.Header>

      {!showMenu ? (
        <>
          <Appbar.Header style={{ backgroundColor: "#84B59F" }}>
            <Appbar.Content title="Olá, Marcos Felippe" />
            <Button mode="contained" color="#50808E" onPress={handleSignOut}>
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
                  onPress={() => setShowMenu(true)}
                >
                  View Our Menu
                </Button>
              </Card.Actions>
            </Card>
          </View>
        </>
      ) : (
        <>
          <View>
            <Title>MENU</Title>
            {menuItems.map((item) => (
              <Text key={item.id}>{item.name}</Text>
            ))}

            <Button
              mode="contained"
              color="#50808E"
              onPress={() => setShowMenu(false)}
            >
              Go Back
            </Button>
          </View>
        </>
      )}
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
