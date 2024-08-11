import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="dashboard" options={{ title: "User Dashboard" }} />
    </Stack>
  );
};

export default Layout;
