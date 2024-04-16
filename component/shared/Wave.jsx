import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";

const Wave = ({ mode }) => {
  return (
    <View style={styles.imageContainer}>
      {mode === 0 ? (
        <Image source={require("../../assets/sine.png")} height={100} />
      ) : mode == 1 ? (
        <Image source={require("../../assets/square.png")} />
      ) : mode == 2 ? (
        <Image source={require("../../assets/triangle.png")} />
      ) : (
        <Text>No mode</Text>
      )}
    </View>
  );
};

export default Wave;

const styles = StyleSheet.create({
  imageContainer: {
    width: "90%",
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1, // Add border width
    borderColor: "black",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
