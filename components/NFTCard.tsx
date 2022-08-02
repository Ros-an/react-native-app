import { View, Text, Image } from "react-native";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import React from "react";
import { CircularButton, RectButton } from "./Button";
import { EthPrice, NFTTitle, SubInfo } from "./SubInfo";

export interface NFTCardProps {
  data: {
    id: string;
    name: string;
    creator: string;
    price: number;
    description: string;
    image: any;
    bids: any[];
  };
}
const NFTCard = ({ data }: NFTCardProps) => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircularButton imgUrl={assets.heart} top={10} right={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
