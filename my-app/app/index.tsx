import { router } from "expo-router";
import React, { useEffect } from "react";
import { auth } from "../firebase.config";
import { View } from "react-native";
import UserDataService from "../services/userdata.service";
export default function IndexScreen() {
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
