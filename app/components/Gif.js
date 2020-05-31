import React from "react";
import { StyleSheet, Image } from "react-native";

export default function Gif() {
  return (
    <Image
      source={require("../assets/images/loading2.gif")}
      style={styles.gif}
    />
  );
}

const styles = StyleSheet.create({
  gif: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center"
  }
});
