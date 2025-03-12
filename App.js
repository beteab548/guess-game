import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import GameScreen from "./screens/gameScreen";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.backgroudImage}
        imageStyle={styles.image}
        resizeMode="cover"
      >
        <GameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroudImage: { flex: 1 },
  image: { opacity: 0.15 },
});
