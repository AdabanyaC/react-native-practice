import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Navigation from "./components/Navigation";
import PromptsScreen from "./components/PromptsScreen";
import Features from "./screens/Features";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Image style={styles.image} source={{ uri: "https://www.reactnative.express/static/logo.png" }} />

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => {
            setCount(count + 1);
          }}
        >
          <Text style={styles.textWhite}>Prompts</Text>
        </TouchableOpacity>
        <Text style={styles.text}> {`Pressed ${count} times.`} </Text>
      </View>*/}
      {/* <Features />
      <Navigation /> */}
      <PromptsScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    backgroundColor: "whitesmoke",
    color: "#4A90E2",
    fontSize: 24,
    padding: 10,
    width: 300,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#6495ed",
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
    position: "absolute",
    bottom: 0,
    left: 10,
  },
  textWhite: {
    color: "#ffffff",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
