import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/button";
export default function GameScreen() {
  return (
    <View style={style.container}>
      <TextInput
        style={style.numberInput}
        keyboardType="number-pad"
        autoCapitalize="false"
        autoCorrect="false"
        maxLength={2}
      />
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
  numberInput: {
    color: "#dd52f",
    borderBottomColor: "#dd52f",
    marginVertical: 8,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    height: 50,
    fontWeight: "bold",
    borderBottomWidth: 2,
  },
});
