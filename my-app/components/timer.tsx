import { useRef, useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

type Props = {};

export default function Timer({}: Props) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const startStopWatch = () => {
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
    <View>
      <Text>{formatTime(time)}</Text>
      <View style={styles.timerButtons}>
        <Button title="Start" onPress={startStopWatch} />
      </View>
      <View style={styles.timerButtons}>
        <Button title="Stop" onPress={stopStopWatch} />
        <Button title="Reset" onPress={resetStopWatch} />
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
});
