import { Text, View, StyleSheet, Pressable } from "react-native";

export default function PrimaryButton({ children,handlePress }) {
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable
        style={style.buttonInnerContainer}
        onPress={handlePress}
        android_ripple={{ color: "@72063f" }}
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const style = StyleSheet.create({
  buttonOuterContainer: {
    overflow: "hidden",
    borderRadius: 28,
    margin: 14,
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 18,
    paddingHorizontal: 26,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
