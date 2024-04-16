import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../../firebaseConfig.js";
import Wave from "../shared/Wave.jsx";
import Details from "../shared/Details.jsx";
const Home = () => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    try {
      firebase
        .database()
        .ref("data")
        .on("value", (snapshot) => {
          setData(snapshot.val());
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      firebase.database().ref("data").off("value");
    };
  }, []);
  console.log(data);

  return (
    <SafeAreaView>
      {data === null ? (
        <Text style={{ fontSize: 28, fontWeight: "500", textAlign: "center" }}>
          Loading...
        </Text>
      ) : (
        <View style={styles.container}>
          <Wave mode={data?.mode} />
          <Details data={data} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
});
