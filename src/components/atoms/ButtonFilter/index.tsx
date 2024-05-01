import { TouchableOpacity } from "react-native";
import React from "react";
import Text from "../Text";

type Props = {
  title: string;
  bgColor?: string;
} & TouchableOpacity["props"];

export default function ButtonFilter({
  title,
  bgColor = "#FFF",
  ...props
}: Readonly<Props>) {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        padding: 5,
        borderRadius: 18,
        paddingHorizontal: 20,
        backgroundColor: bgColor,
      }}
      {...props}
    >
      <Text fonstSize={14}>{title}</Text>
    </TouchableOpacity>
  );
}
