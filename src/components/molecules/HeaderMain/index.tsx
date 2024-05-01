import { Image, TouchableOpacity, View } from "react-native";
import React from "react";

import Text from "@components/atoms/Text";
import ICONS from "@assets/icons";
import { useModalContext } from "@utils/context/modalContext";

import styles from "./styles";
import ModalForm from "../ModalForm";

export default function HederMain() {
  const { setModalOpen, setContent } = useModalContext();

  const onModalOpen = () => {
    setModalOpen(true);
    setContent && setContent(<ModalForm />);
  };
  return (
    <View style={{ padding: 20 }}>
      <Text fonstSize={34} bold style={{ marginTop: 20 }}>
        Welcome To Task Manager!
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text color="#939393" style={{ marginVertical: 10 }}>
          What are you doing today?
        </Text>

        <TouchableOpacity style={styles.addContent} onPress={onModalOpen}>
          <Image source={ICONS.plus} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
