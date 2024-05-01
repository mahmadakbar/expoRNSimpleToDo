import { Image, View } from "react-native";
import React from "react";
import Text from "../Text";
import ICONS from "@assets/icons";

export default function Empty() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <Image source={ICONS.basket} style={{ width: 160, height: 160 }} />
      <Text
        bold
        color="#8e44ad"
        fonstSize={26}
        style={{ marginTop: 20, textAlign: "center" }}
      >
        This is Empty!!, please add something
      </Text>
    </View>
  );
}
