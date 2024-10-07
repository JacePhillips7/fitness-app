import { StyleSheet, Text, View } from "react-native";
export default function CreateWorkout() {
  return (
    <View style={styles.container}>
      <View style={styles.top_half}>
        <Text>4 cards here</Text>
      </View>
      <View style={styles.bottom_half}>
        <Text>Options from selection here</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  top_half: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  bottom_half: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginHorizontal: 25,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
