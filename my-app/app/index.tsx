import { Link, router } from "expo-router";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { auth } from "../firebase.config";
export default function IndexScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        router.navigate("home");
      } else {
        router.navigate("login");
      }
    });
  });

  return <View></View>;
}
