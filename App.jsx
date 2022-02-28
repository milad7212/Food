import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CartScreen from "./app/screens/CartScreen";
import DetailsScreen from "./app/screens/DetailsScreen";
import HomeScreen from "./app/screens/HomeScreen";
import OnBoardScreen from "./app/screens/OnBoardScreen";

export default function App() {
  return (
    //  <HomeScreen/>
    // <DetailsScreen />
    <CartScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
