import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { router } from "expo-router";
import { auth } from "../firebase.config";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
export default function login() {
  const handleLogin = async () => {
    //set the error to an empty string
    setError("");
    try {
      let userCreds = await signInWithEmailAndPassword(auth, email, password);
      const user = userCreds.user;
      await auth.updateCurrentUser(user);
      //navigate to the dashboard
      auth.onAuthStateChanged((user) => {
        router.navigate("home");
      });
    } catch (error: any) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  const handleSignUp = async () => {
    //set the error to an empty string
    setError("");
    try {
      let userCreds = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCreds.user;
    } catch (error: any) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />

      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  error: {
    color: "red",
  },
});
