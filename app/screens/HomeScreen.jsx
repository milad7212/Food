import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";

function HomeScreen(props) {
  return (
    <Screen>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 28 }}>Hello,</Text>
            <Text style={{ fontSize: 28, fontWeight: "bold", marginLeft: 10 }}>
              Milad
            </Text>
          </View>
          <Text style={{ marginTop: 5, fontSize: 22, color: colors.grey }}>
            What do you want today?
          </Text>
        </View>
        <Image style={styles.image} source={require("../assets/person.png")} />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 1,
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="search-web" size={30} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search for food"
          />
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: colors.light,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
export default HomeScreen;
