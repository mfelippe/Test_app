import Reac, { useState } from "react";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "../firebase-config";
import * as firebase from "firebase";

const Index = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            //alert(uid);
            navigation.replace("Home");
            // ...
          } else {
            // User is signed out
            // ...
          }
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        color="#DDD8C4"
        onPress={handleSignUp}
        //onPress={() => navigation.navigate("Home")}
      >
        SIGN IN
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  //https://coolors.co/ddd8c4-a3c9a8-84b59f-69a297-50808e
  container: {
    flex: 1,
    backgroundColor: "#69A297",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Index;
