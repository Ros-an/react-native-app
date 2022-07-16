import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

export interface CirBtnProps {
  handlePress?: any;
  imgUrl: ImageSourcePropType;
  top: number;
  right: number;
}
export const CircularButton = ({
  imgUrl,
  handlePress,
  ...props
}: CirBtnProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.extraLarge,
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        style={{ width: 24, height: 24 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export const RectButton = () => {
  return (
    <View>
      <Text>Circular</Text>
    </View>
  );
};
