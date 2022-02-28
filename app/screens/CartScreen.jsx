import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";
import foods from "../config/foods";
import { Button } from "../components/Button";

function CartScreen() {
  const CartCard = ({ item }) => {
    console.log(item);
    return (
      <View style={styles.cartCard}>
        <Image source={item.image} style={{ height: 80, width: 80 }} />
        <View
          style={{ height: 100, marginLeft: 10, paddingVertical: 20, flex: 1 }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
          <Text style={{ fontSize: 13, color: colors.grey }}>
            {item.ingredients}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>{item.price}</Text>
        </View>
        <View style={{ marginRight: 20, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>3</Text>
          <View style={styles.actionBtn}>
            <MaterialCommunityIcons
              name="minus"
              size={20}
              color={colors.white}
            />
            <MaterialCommunityIcons
              name="plus"
              size={20}
              color={colors.white}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.header}></View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        data={foods}
        renderItem={({ item }) => <CartCard item={item} />}
        ListFooterComponentStyle={{ paddingHorizontal: 20, marginTop: 20 }}
        ListFooterComponent={() => (
          <>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 15,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  Total Price
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>50$</Text>
              </View>
              <View style={{ marginHorizontal: 30 }}>
                <Button title="CHECKOUT" />
              </View>
            </View>
          </>
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  cartCard: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 15,
    flexDirection: "row",
    height: 100,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default CartScreen;
