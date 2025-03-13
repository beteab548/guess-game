import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/button";
import { useState } from "react";
export default function GameScreen() {
  const [inputNumber, setInputNumber] = useState("");
  function changeHandler(inputNumber) {
    setInputNumber(inputNumber);
  }
  function handleResetPress() {
    setInputNumber("");
  }
  function handleConfirmPress() {
    const number = parseInt(inputNumber);
    console.log(number);
    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        { text: "okay", style: "destructive", onPress: handleResetPress },
      ]);
      return;
    }
  }
  return (
    <View style={style.container}>
      <TextInput
        style={style.numberInput}
        keyboardType="number-pad"
        autoCapitalize={false}
        autoCorrect={false}
        maxLength={2}
        onChangeText={changeHandler}
        value={inputNumber}
      />
      <View style={style.buttonsContainer}>
        <View style={style.buttonContainer}>
          <PrimaryButton handlePress={handleResetPress}>Reset</PrimaryButton>
        </View>
        <View style={style.buttonContainer}>
          <PrimaryButton handlePress={handleConfirmPress}>
            Confirm
          </PrimaryButton>
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
