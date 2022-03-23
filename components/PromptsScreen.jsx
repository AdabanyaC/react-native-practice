import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import PromptTopics from "./PromptTopics";
import PromptsCategories from "./PromptsCategories";

const PromptsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textHeader}>Create a Prompt</Text>
      <Text style={styles.textCaption}>
        Thinking of what to talk about? choose a topic. Your followers will be able to follow the conversation.
      </Text>

      <ScrollView>
        <View style={styles.subContainer}>
          <PromptsCategories />
          <PromptTopics
            topic={"How can we help employees who go through a toxic work environment just to make ends meet?"}
          />
          <PromptTopics topic={"What's your favorite verse of the Bible and why?"} />
          <PromptTopics
            topic={
              "How old were you when you started supporting your favorite football club? Which player stood out for you?"
            }
          />
          <PromptTopics topic={"Do you believe in love at first sight? Share an experience if you can."} />
          <PromptTopics topic={"What are your thoughts surrounding the roles of each spouse in building a family."} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PromptsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#ff4136d1",
    height: "100%",
    paddingTop: 80,
  },
  subContainer: {
    marginTop: 50,
    backgroundColor: "#fff",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },

  textHeader: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 24,
  },
  textCaption: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    padding: 20,
  },
});
