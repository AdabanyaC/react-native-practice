import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PromptTopics = ({ topic }) => {
  return (
    <View style={styles.cardWrapper}>
      <View>
        <Text style={styles.cardText}> {topic} </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <View
          style={{
            backgroundColor: "#1f273380",
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 10,
          }}
        >
          <Text style={styles.buttonText}>Respond</Text>
        </View>
      </View>
    </View>
  );
};

export default PromptTopics;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: "#FEEBEB",
    borderRadius: 10,
    padding: 30,
    marginTop: 30,
  },
  cardText: {
    textAlign: "center",
    color: "#1F2733",
  },

  buttonWrapper: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});
