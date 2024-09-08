import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import Timer from "../../components/timer";
export default function HomeTab() {
  return (
    <View style={styles.container}>
      <Timer />
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
