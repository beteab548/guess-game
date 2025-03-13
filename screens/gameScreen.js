import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/button";
import { useState } from "react";
export default function GameScreen() {
  const [inputNumber, setInputNumber] = useState("");
  function changeHandler(inputNumber) {
    setInputNumber(inputNumber);
  }
  function handlePress() {}
  return (
    <View style={style.container}>
      <TextInput
        style={style.numberInput}
        keyboardType="number-pad"
        autoCapitalize={false}
        autoCorrect={false}
        maxLength={2}
        onChange={changeHandler}
        value={inputNumber}
      />
      <View style={style.buttonsContainer}>
        <View style={style.buttonContainer}>
          <PrimaryButton handlePress={handlePress}>Reset</PrimaryButton>
        </View>
        <View style={style.buttonContainer}>
          <PrimaryButton handlePress={handlePress}>Confirm</PrimaryButton>
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
    height: 80,
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
