import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";
import { COLORS } from "../constants";

export interface FocusedStatusBarProps {
  backgroundColor: string;
}
const FocusedStatusBar = (props: FocusedStatusBarProps) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar animated={true} {...props} style="light" />
  ) : null;
};

export default FocusedStatusBar;
