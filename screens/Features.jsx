import React from "react";
import { ScrollView } from "react-native";
import FeaturesCard from "../components/FeaturesCard";
import SectionHeader from "../components/SectionHeader";
import DoingIcon from "./../assets/icons/doing.png";
import StandardIcon from "./../assets/icons/Standard.png";
import RichIcon from "./../assets/icons/rich.png";
import InteractiveIcon from "./../assets/icons/interactive.png";

export default function Features() {
  return (
    <>
      <ScrollView>
        <SectionHeader />
        <FeaturesCard
          cardIcon={DoingIcon}
          cardTitle="Learn By Doing"
          cardBody={"We believe the best way to learn is by doing. Hence, our learning approach."}
        />
        <FeaturesCard
          cardIcon={StandardIcon}
          cardTitle="Industry-standard projects"
          cardBody={"The web development world is improving, master modern tools with modern projects."}
        />
        <FeaturesCard
          cardIcon={RichIcon}
          cardTitle="Rich Portfolio"
          cardBody={"Showcase your portfolio to employers after this course. You'd be glad."}
        />
        <FeaturesCard
          cardIcon={InteractiveIcon}
          cardTitle="Interactive Forum"
          cardBody={"As you improve, get the opportunity to contribute to other learners. You'd be proud of yourself!"}
        />
      </ScrollView>
    </>
  );
}
