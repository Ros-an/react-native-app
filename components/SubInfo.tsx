import React from "react";
import { Text, View, Image, ImageSourcePropType } from "react-native";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export interface NFTTitleProps {
  title: string;
  subTitle: string;
  titleSize: number;
  subTitleSize: number;
}
export const NFTTitle = ({
  title,
  subTitle,
  subTitleSize,
  titleSize,
}: NFTTitleProps) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};
export const EthPrice = ({ price }: { price: number }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{
          marginRight: 2,
          height: 20,
          width: 20,
        }}
      />
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  );
};
export interface ImageCmpProps {
  imgUrl: ImageSourcePropType;
  ind: number;
}
export const ImageCmp = ({ imgUrl, ind }: ImageCmpProps) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{ width: 48, height: 48, marginLeft: ind === 0 ? 0 : -SIZES.font }}
    />
  );
};
export const People = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (item, index) => (
          <ImageCmp imgUrl={item} ind={index} key={`people-${index}`} />
        )
      )}
    </View>
  );
};
export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        backgroundColor: COLORS.white,
        paddingVertical: SIZES.base,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          color: COLORS.primary,
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          color: COLORS.primary,
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
        }}
      >
        6h 30m
      </Text>
    </View>
  );
};
export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </View>
  );
};
