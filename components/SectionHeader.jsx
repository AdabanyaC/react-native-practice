import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SectionHeader() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.header}>Why you should take this course</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  header: {
    color: "#002b54",
    marginTop: 80,
    fontSize: 24,
    textAlign: "center",
  },
});
