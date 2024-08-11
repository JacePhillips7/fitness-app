import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { auth } from "../firebase.config";
import { onAuthStateChanged, User } from "firebase/auth";
import { useState, useEffect } from "react";
export default function DashboardScreen() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      return setUser(currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Text>Welcome {user?.displayName ?? user?.email}</Text>
      <Link href="/">Login</Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
