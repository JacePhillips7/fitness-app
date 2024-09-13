import { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
const buttonColor = "#295F98";
export default function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const startStopWatch = () => {
    if (isRunning) return;
    startTimeRef.current = Date.now() - time * 10;
    intervalRef.current = setInterval(() => {
      setTime(Math.floor((Date.now() - startTimeRef.current!) / 10));
    }, 1);
    setIsRunning(true);
  };
  const stopStopWatch = () => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const resetStopWatch = () => {
    stopStopWatch();
    setTime(0);
  };
  const formatTime = (time: number) => {
    const hours = Math.floor(time / 100 / 60 / 60);
    const minutes = Math.floor((time / 100 / 60) % 60);
    const seconds = Math.floor((time / 100) % 60);
    const centiseconds = time % 100;
    return `${hours ? hours + ":" : ""}${minutes ? minutes + ":" : ""}${seconds}:${centiseconds}`;
  };
  return (
    <View style={styles.container}>
      <Text>{formatTime(time)}</Text>
      <View style={styles.timerButtons}>
        {!isRunning ? (
          <Button
            mode="contained"
            buttonColor={buttonColor}
            onPress={startStopWatch}
          >
            Start
          </Button>
        ) : (
          <Button
            mode="contained"
            buttonColor={buttonColor}
            onPress={stopStopWatch}
          >
            Stop
          </Button>
        )}
        <Button
          mode="contained"
          buttonColor={buttonColor}
          onPress={resetStopWatch}
        >
          Reset
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  timerButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
});
