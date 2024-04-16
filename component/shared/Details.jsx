import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Details = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 28, fontWeight: "500" }}>Details</Text>
      <View style={styles.line}></View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View
          style={{
            backgroundColor: "#fec9f9",
            height: "120%",
            width: "35%",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{ fontSize: 24, textAlign: "center", fontWeight: "500" }}
          >
            WAVE
          </Text>
          <View style={styles.line2}></View>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              fontWeight: "500",
              color: "white",
            }}
          >
            {data?.mode === 0
              ? "Sine"
              : data?.mode === 1
              ? "Square"
              : data?.mode === 2
              ? "Triangle"
              : "Unknown"}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#6365d8",
            height: "120%",
            width: "35%",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text
            style={{ fontSize: 24, textAlign: "center", fontWeight: "500" }}
          >
            FREQ
          </Text>
          <View style={styles.line2}></View>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              fontWeight: "500",
              color: "white",
            }}
          >
            {data?.freq} Hz
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    width: "100%",
    paddingHorizontal: 20,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#d9dee7",
    marginTop: 10,
    marginBottom: 10,
  },
  line2: {
    height: 1,
    width: "100%",
    backgroundColor: "#ffffff",
    marginTop: 10,
    marginBottom: 10,
  },
});
