import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import { Appbar, Card, Button, List, Title } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { menuItens } from "../MenuItems";
import ShowMenu from "../components/ShowMenu";

const Menu = ({ navigation }) => {
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#50808E" }}>
        <Appbar.Content title="MENU" />
      </Appbar.Header>
      <View style={styles.container}>
        <Button
          style={{ height: 35, width: 140 }}
          icon="home-outline"
          mode="contained"
          color="#50808E"
          onPress={() => navigation.goBack()}
        >
          GO BACK
        </Button>
      </View>
      <View>
        <List.Section title="YSP MENU">
          <FlatList
            data={menuItens}
            renderItem={({ item }) => <ShowMenu {...item} />}
            keyExtractor={(item) => item.id}
          />
        </List.Section>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3c9a8",
  },
});

export default Menu;
