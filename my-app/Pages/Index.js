import Reac, { useState, useEffect } from "react";
import { Button } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "../firebase-config";
import * as firebase from "firebase";

const Index = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpAnonumously = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            //alert("SIGN IN SUCCESS");
            const email = user.uid;
            navigation.replace("Home", { user: email });
            // ...
          } else {
            // ...
          }
        });
      })
      .catch((error) => {
        alert(error.message);
        // ...
      });
  };

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        alert("Registered");
        setPassword("");
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.replace("Home", { user: email });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Image
          style={{ height: 200, width: "90%" }}
          source={require("./pictures/dang.png")}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon="google-plus"
          mode="contained"
          color="#50808E"
          onPress={handleLogin}
          //onPress={() => navigation.navigate("Home")}
        >
          LOG IN
        </Button>
        <Button
          icon="google-plus"
          mode="contained"
          color="#DDD8C4"
          onPress={handleSignUp}
          //onPress={() => navigation.navigate("Home")}
        >
          SIGN UP
        </Button>
      </View>
      <View style={styles.subButton}>
        <Button
          icon="google-plus"
          mode="contained"
          color="#DDD8C4"
          onPress={handleSignUpAnonumously}
          //onPress={() => navigation.navigate("Home")}
        >
          ANONYMOUS SIGNIN
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  //https://coolors.co/ddd8c4-a3c9a8-84b59f-69a297-50808e
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#69A297",
  },
  inputContainer: {
    marginTop: "50%",
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
    alignItems: "stretch",
    marginTop: 40,
    backgroundColor: "#69A297",
  },
  subButton: {
    minHeight: "30%",
    minWidth: "100%",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#50808e",
  },
});

export default Index;
