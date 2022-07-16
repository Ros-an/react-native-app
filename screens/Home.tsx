import React from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import { COLORS, NFTData } from "../constants";
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

export default Home;
