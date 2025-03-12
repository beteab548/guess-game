import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/button";
export default function GameScreen() {
  return (
    <View style={style.container}>
      <TextInput
        style={style.numberInput}
        keyboardType="number-pad"
        autoCapitalize={false}
        autoCorrect={false}
        maxLength={2}
      />
      <View style={style.buttonContainer}>
        <View style={style.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={style.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    marginTop: "60",
    backgroundColor: "#4e0329",
    marginHorizontal: 14,
    elevation: 6,
    borderRadius: 10,
    alignItems: "center",
  },
  numberInput: {
    color: "orange",
    borderBottomColor: "orange",
    marginVertical: 6,
    width: 50,
    textAlign: "center",
    fontSize: 26,
    height: 50,
    fontWeight: "bold",
    borderBottomWidth: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
});
