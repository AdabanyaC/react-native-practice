import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function FeaturesCard({ cardIcon, cardTitle, cardBody }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <Image style={styles.image} source={cardIcon} />
        <Text style={styles.cardTitle}> {cardTitle} </Text>
        <Text style={styles.cardBody}> {cardBody} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  cardWrapper: {
    display: "flex",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#d3d3d3",
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  cardTitle: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
  cardBody: {
    marginTop: 10,
    fontSize: 16,
  },
});
