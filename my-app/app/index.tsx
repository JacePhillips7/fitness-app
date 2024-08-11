import { Link } from "expo-router";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../firebase.config";
import { initializeApp } from "firebase/app";
import { useState } from "react";
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    //set the error to an empty string
    setError("");
    try {
      let userCreds = await signInWithEmailAndPassword(auth, email, password);
      const user = userCreds.user;
      console.log(user);
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
