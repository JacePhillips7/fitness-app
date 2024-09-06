import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="home" options={{ title: "Home" }} />
      <Stack.Screen name="index" options={{ title: "" }} />
    </Stack>
  );
};

export default Layout;
