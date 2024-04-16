import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="black" />
      <Text style={styles.heading}>Main Screen</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "30%",
  },
});
