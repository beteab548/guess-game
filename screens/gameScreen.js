import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/button";
export default function GameScreen() {
  return (
    <View style={style.container}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    marginTop: "60",
    backgroundColor: "purple",
    marginHorizontal: 24,
    elevation: 6,
    borderRadius: 10,
  },
});
