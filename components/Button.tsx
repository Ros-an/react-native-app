import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES } from "../constants";

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

export interface RectBtnProps {
  handlePress?: () => void;
  minWidth: number;
  fontSize: number;
}
export const RectButton = ({
  fontSize,
  minWidth,
  handlePress,
  ...props
}: RectBtnProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place bid in
      </Text>
    </TouchableOpacity>
  );
};
