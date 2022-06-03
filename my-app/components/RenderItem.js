import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card, Title, Paragraph, Button, Appbar } from "react-native-paper";
import { menuItens } from "../MenuItems";

export default function RenderItem({ route }) {
  const navigation = useNavigation();
  return (
    <>
      <Appbar.Header style={{ backgroundColor: "#50808E" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title={menuItens[route.params?.id].name.toUpperCase()}
        />
      </Appbar.Header>

      <View style={styles.container}>
        <Image
          style={styles.imageFood}
          source={{ uri: menuItens[route.params?.id].imageUrl }}
        />

        <View style={styles.disc}>
          <Text style={styles.textDisc}>
            {" ''" + menuItens[route.params?.id].description + "''"}
          </Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.textPrice}>
            {"Price: " + menuItens[route.params?.id].price + "$"}
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "100%",
    backgroundColor: "#DDD8C4",
    alignItems: "center",
    justifyContent: "start",
  },
  imageFood: {
    margin: 20,
    minHeight: "40%",
    width: "90%",
    borderRadius: 30,
    borderColor: "#50808E",
    borderWidth: 6,
  },
  price: {
    width: "90%",
    margin: 5,
    opacity: 0.9,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#84B59F",
    alignItems: "center",
    justifyContent: "center",
  },
  textPrice: {
    padding: 10,
    fontSize: 22,
    color: "#fff",
    fontWeight: "700",
  },
  disc: {
    width: "90%",
    margin: 5,
    opacity: 0.9,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#50808E",
    alignItems: "center",
    justifyContent: "center",
  },
  textDisc: {
    fontSize: 22,
    color: "#fff",
    fontStyle: "italic",
  },
});
