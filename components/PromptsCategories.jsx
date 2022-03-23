import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const PromptsCategories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryText}>All</Text>
        </View>
        <View style={styles.categoryAltWrapper}>
          <Text style={styles.categoryAltText}>Relationship</Text>
        </View>
        <View style={styles.categoryAltWrapper}>
          <Text style={styles.categoryAltText}>Politics</Text>
        </View>
        <View style={styles.categoryAltWrapper}>
          <Text style={styles.categoryAltText}>Sports</Text>
        </View>
        <View style={styles.categoryAltWrapper}>
          <Text style={styles.categoryAltText}>Christianity</Text>
        </View>
        <View style={styles.categoryAltWrapper}>
          <Text style={styles.categoryAltText}>Gaming</Text>
        </View>
        <View style={styles.categoryAltWrapper}>
          <Text style={styles.categoryAltText}>Music</Text>
        </View>
        <View style={styles.categoryAltWrapper}>
          <Text style={styles.categoryAltText}>Comedy</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PromptsCategories;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  categoryWrapper: {
    padding: 20,
    backgroundColor: "#E95D5D",
    marginRight: 10,
    borderRadius: 8,
    height: 60,
  },
  categoryAltWrapper: {
    padding: 20,
    backgroundColor: "#FEEBEB",
    marginRight: 10,
    borderRadius: 8,
    height: 60,
  },
  categoryText: {
    color: "#fff",
  },
  categoryAltText: {
    color: "#D63838",
  },
});
