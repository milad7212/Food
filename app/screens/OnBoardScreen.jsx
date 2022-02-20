import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Button from "../components/Button";
import Screen from "../components/Screen";
import colors from "../config/colors";

function OnBoardScreen(props) {
  return (
    <Screen>
      <Image
        style={styles.image}
        source={require("../assets/onboardImage.png")}
      />

      <View>
        <Text style={styles.title}>کافه دوست سید</Text>
        <Text style={styles.subTitle}> به لحظات لبخند بزن : )</Text>
      </View>
      <View style={styles.indicatorContainer}>
        <View style={styles.currentIndicator} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
      </View>
      <View style={styles.buttonContainer}>

      <Button title="شروع کنیم" />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
    buttonContainer:{
        marginHorizontal:20
    },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: colors.primary,
    marginHorizontal: 5,
  },
  subTitle: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
    color: colors.grey,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "100%",

    height: 360,
    resizeMode: "contain",
    // top: -150,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: colors.grey,
    marginHorizontal: 5,
  },
  indicatorContainer: {
    height: 50,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnBoardScreen;
