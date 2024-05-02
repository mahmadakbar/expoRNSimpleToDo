import { Image, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import ICONS from "@assets/icons";
import Text from "@components/atoms/Text";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@interfaces/IntervaceNavigaion";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MenuPop from "@components/atoms/MenuPop";
import { SHADOW } from "@assets/styles";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function Header() {
  const navigation = useNavigation() as Props["navigation"];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ position: "relative" }}>
        <Image source={ICONS.menu} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.profile}
        onPress={() => navigation.navigate("Profile")}
      >
        <View style={styles.avatar}>
          <Text semiBold>A</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
