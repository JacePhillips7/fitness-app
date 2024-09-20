import { View, StyleSheet } from "react-native";
import Timer from "../../components/timer";
import Workout from "../../components/routine/workout";
export default function HomeTab() {
  return (
    <View style={styles.container}>
      <View style={styles.top_half}>
        <Timer />
      </View>
      <View style={styles.bottom_half}>
        <Workout />
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
  bottom_half: { flex: 1, justifyContent: "flex-start", alignItems: "flex-start", width: "100%" },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
