import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";
import foods from "../config/foods";
import { SecondaryButton } from "../components/Button";

const item = foods[0];
function DetailsScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image source={item.image} style={{ height: 220, width: 220 }} />
        </View>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: colors.white }}
            >
              {item.name}
            </Text>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name="heart"
                size={30}
                color={colors.secondary}
              />
            </View>
          </View>
          <Text style={styles.detailsText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            ipsam quas, quis suscipit sequi, autem voluptates repudiandae odio,
            ab nam maxime est quia quaerat aspernatur omnis amet laborum
            repellendus vitae perspiciatis. Fugit eos, exercitationem cumque
            aspernatur a magni optio accusantium, temporibus enim nihil earum
            deleniti itaque necessitatibus voluptatem repellendus et! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Vero at nam
            corrupti corporis. Unde, totam. Doloribus ea at praesentium neque
            adipisci, consequatur quas repellendus! Sit ab iusto maiores porro
            aliquid numquam, quis cum libero, eius omnis, inventore quos vero?
            Quo minus fugiat molestias ex mollitia non delectus necessitatibus
            ipsum nulla.
          </Text>
          <View style={{ marginTop: 40, marginBottom: 40 }}>
            <SecondaryButton title="Add To Cart" />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  details: {
    backgroundColor: colors.primary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    paddingBottom: 60,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: colors.white,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 20,
  },
  iconContainer: {
    backgroundColor: colors.white,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
});

export default DetailsScreen;
