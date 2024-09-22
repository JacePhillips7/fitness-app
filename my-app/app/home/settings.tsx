import { View, Text, StyleSheet } from "react-native";
import UserData from "../../components/userdata";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab [Settings]</Text>
    <UserData />
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
