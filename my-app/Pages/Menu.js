import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Appbar, Card, Button, List, Title, Avatar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { menuItens } from "../MenuItems";
import ShowMenu from "../components/ShowMenu";

const Menu = ({ navigation }) => {
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#50808E" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="MENU" />
      </Appbar.Header>

      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <>
              <ImageBackground
                source={require("./pictures/menuBg.png")}
                style={styles.image}
              >
                <Text style={styles.headerList}> OUR MENU </Text>
              </ImageBackground>
            </>
          }
          data={menuItens}
          renderItem={({ item }) => (
            <>
              <View style={styles.fList}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    navigation.navigate("renderItem", { id: item.id - 1 })
                  }
                >
                  <Text style={styles.tList}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fList: {
    margin: 10,
    padding: 10,
    backgroundColor: "#50808E",
    borderRadius: 20,
    minWidth: "90%",
  },
  button: { alignItems: "center", justifyContent: "center", minWidth: "100%" },
  tList: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    justifyContent: "space-around",
    fontStyle: "italic",
  },
  image: {
    height: "100%",
    width: "100%",
    opacity: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  headerList: {
    fontSize: 42,
    color: "#fff",
  },
});

export default Menu;
