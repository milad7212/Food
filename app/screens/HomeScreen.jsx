import { React, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";
import categories from "../config/categories";
import foods from "../config/foods";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

function HomeScreen(props) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex === index
                    ? colors.primary
                    : colors.light,
                ...styles.categoryBtn,
              }}
            >
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{ height: 40, width: 40, resizeMode: "cover" }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index ? colors.white : colors.dark,
                }}
              >
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({ food }) => (
    <TouchableHighlight
      underlayColor={colors.white}
      activeOpacity={0.9}
      onPress={() => console.log("tap")}
    >
      <View style={styles.card}>
        <View style={{ alignItems: "center", top: -40 }}>
          <Image source={food.image} style={{ height: 120, width: 120 }} />
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{food.name}</Text>
          <Text style={{ fontSize: 14, color: colors.grey, marginTop: 2 }}>
            {food.ingredients}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {food.price} ت
          </Text>
          <View style={styles.addToCartBtn}>
            <MaterialCommunityIcons
              name="plus"
              size={25}
              color={colors.white}
            />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

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
          flexDirection: "row",
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
        <View style={styles.sortBtn}>
          <MaterialCommunityIcons name="sort" size={30} color={colors.white} />
        </View>
      </View>
      <ListCategories />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({ item }) => <Card food={item} />}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    elevation: 13,
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: colors.white,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainerStyle: {
    paddingVertical: 30,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sortBtn: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  inputContainer: {
    backgroundColor: colors.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
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
