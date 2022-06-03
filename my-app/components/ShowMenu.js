import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import {
  Appbar,
  Card,
  Button,
  List,
  Title,
  Paragraph,
} from "react-native-paper";

import { menuItens } from "../MenuItems";

export default function ShowItems({
  id,
  name,
  description,
  price,
  imageUrl,
} = menuItens) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <>
      <View style={styles.ShowItems}>
        <List.Accordion
          style={{ backgroundColor: "#A3C9A8" }}
          titleStyle={{ fontSize: 22 }}
          title={name}
          id={id}
          left={(props) => <List.Icon {...props} icon="chevron-right" />}
        >
          <Card style={{ backgroundColor: "#69A297" }}>
            <Card.Content>
              <Card.Cover source={{ uri: imageUrl }} style={styles.stretch} />
              <Title>{name}</Title>
              <Paragraph>{description}</Paragraph>
              <Title>{"Price : " + price}</Title>
            </Card.Content>
          </Card>
        </List.Accordion>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  ShowItems: {
    marginTop: 10,
    backgroundColor: "#69A297",
  },
  stretch: {
    height: 200,
    resizeMode: "contain",
    borderRadius: 10,
  },
});
