import { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { color } from "../theme/color_theme";
const buttonColor = color.primary;
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
    function formatNum(num: number, del: string = ":"): string {
      if (num < 0.1) return "";
      if (num < 10) {
        return `0${num}${del}`;
      }
      return `${num}${del}`;
    }

    const hours = Math.floor(time / 100 / 60 / 60);
    const minutes = Math.floor((time / 100 / 60) % 60);
    const seconds = Math.floor((time / 100) % 60);
    const centiseconds = time % 100;
    return `${formatNum(hours)}${formatNum(minutes)}${formatNum(seconds) || "00:"}${formatNum(centiseconds, "") || "00"}`;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.stopwatch}>{formatTime(time)}</Text>
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
  stopwatch: {
    fontFamily: "Orbitron",
    fontSize: 36,
    userSelect: "none",
  },
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
