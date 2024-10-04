import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../providers/auth.provider";
export default function Tab() {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Text>Tab [Settings]</Text>
      <Text>{user?.displayName ?? user?.email}</Text>
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
