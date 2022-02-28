import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function Button({ title, onPress = () => {} }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

function SecondaryButton({ title, onPress = () => {} }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{ ...styles.btnContainer, backgroundColor: colors.white }}>
        <Text style={{ ...styles.title, color: colors.primary }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
  btnContainer: {
    backgroundColor: colors.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export { Button, SecondaryButton };
