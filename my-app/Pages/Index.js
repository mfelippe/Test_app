import Reac, { useState } from "react";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "../firebase-config";
import * as firebase from "firebase";

const Index = () => {
  const navigation = useNavigation();
  const [erroMessage, setErroMessage] = useState();
  const [erroCode, setErroCode] = useState();
  const [showErro, setShowErro] = useState(false);

  const handleSignUpAnonumously = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            var uid = user.uid;
            //alert("SIGN IN SUCCESS");
            navigation.replace("Home", { user: user.uid });
            // ...
          } else {
            // ...
          }
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setErroMessage(errorMessage);
        setErroCode(errorCode);
        setShowErro(true);
        // ...
      });
  };

  return (
    <View style={styles.container}>
      <Button
        icon="google-plus"
        mode="contained"
        color="#DDD8C4"
        onPress={handleSignUpAnonumously}
        //onPress={() => navigation.navigate("Home")}
      >
        SIGN IN
      </Button>
      {showErro ? (
        <>
          <View
            style={{
              height: "40%",
              width: "80%",
              position: "absolute",
              bottom: 0,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 22 }}>{erroCode}</Text>
            <Text style={{ color: "#fff", fontSize: 10, marginBottom: 10 }}>
              {erroMessage}
            </Text>
            <Button
              mode="contained"
              color="red"
              onPress={() => setShowErro(false)}
              //onPress={() => navigation.navigate("Home")}
            >
              OK
            </Button>
          </View>
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  //https://coolors.co/ddd8c4-a3c9a8-84b59f-69a297-50808e
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#69A297",
  },
});

export default Index;
