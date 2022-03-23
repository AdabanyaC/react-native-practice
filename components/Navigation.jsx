import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import HomeIcon from "./../assets/icons/Home.svg";

export default function Navigation() {
  return (
    <View style={styles.box}>
      <View>
        <Image style={styles.image} source={HomeIcon} />
        <Text style={styles.navText}>Home</Text>
      </View>
      <View>
        <Image style={styles.image} source={HomeIcon} />
        <Text style={styles.navText}>Features</Text>
      </View>
      <View>
        <Image style={styles.image} source={HomeIcon} />
        <Text style={styles.navText}>Curriculum</Text>
      </View>
      <View>
        <Image style={styles.image} source={HomeIcon} />
        <Text style={styles.navText}>Projects</Text>
      </View>
      <View>
        <Image style={styles.image} source={HomeIcon} />
        <Text style={styles.navText}>Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#6495ED",
    height: 80,
    paddingLeft: 20,
  },

  image: {
    width: 52,
    height: 52,
  },
  navText: {
    color: "#fff",
  },
});
